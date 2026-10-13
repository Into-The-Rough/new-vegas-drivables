"""Cut a silent, on-demand homepage preview from the author's gameplay videos."""
import argparse
from pathlib import Path
import subprocess

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('videos', type=Path)
args = parser.parse_args()
root = Path(__file__).resolve().parents[1]
clips = [('ivanpah-race-test-video', 44), ('companion-horses-world-integration-video', 9),
         ('daytime-flight-demo-video', 47), ('wip-horse-racing-video', 45)]
command = ['ffmpeg', '-hide_banner', '-loglevel', 'error', '-y']
for folder, start in clips:
    files = list((args.videos / folder).glob('*.mp4'))
    if len(files) != 1:
        raise ValueError(f'expected one video in {folder}')
    command += ['-ss', str(start), '-t', '8', '-i', str(files[0])]
filters = [f'[{i}:v]scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2,setsar=1,fps=30,setpts=PTS-STARTPTS[v{i}]' for i in range(4)]
filters.append('[v0][v1][v2][v3]concat=n=4:v=1:a=0[out]')
command += ['-filter_complex_threads', '2', '-filter_complex', ';'.join(filters), '-map', '[out]', '-an',
            '-c:v', 'libx264', '-preset', 'medium', '-crf', '26', '-maxrate', '2500k', '-bufsize', '5000k',
            '-threads', '4', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', str(root / 'public/assets/gameplay-preview.mp4')]
subprocess.run(command, check=True)
