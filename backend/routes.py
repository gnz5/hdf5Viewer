from flask import render_template, Blueprint, request, jsonify, make_response
import datetime
import numpy as np
import h5py
import matplotlib.pyplot as plt
from matplotlib.backends.backend_agg import FigureCanvasAgg
from matplotlib.figure import Figure
from io import BytesIO
import base64
from PIL import Image
import os
import logging

from hdf5viewer import app

BUFFER_IMAGE_FILEPATH = '../frontend/src/buffer'
current_frame = 0
play_rate = 1
frames_ndarray = None
file_path = None

logging.basicConfig(level=logging.DEBUG, format='%(name)s - %(levelname)s - %(message)s\n')

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/test')
def get_time():
    x = str(datetime.datetime.now())
    return {'Date': x}

@app.route('/loadh5')
def load_h5():
    logging.info('hi')
    global file_path
    global frames_ndarray
    current_frame = 0
    #file_path = '/data4/bovey/Imaging/2p/byr_ne02_02/12_18_22/context_switch-000/context_switch-000.h5'
    file_path = 'C:/Users/rosam/Downloads/h5data/context_switch-000/context_switch-000.h5'
    file = h5py.File(file_path, 'r')
    frames_ndarray = file['imaging']
    logging.debug(f'Loaded {file_path}')
    return f'Loaded {file_path}'

@app.route('/nextframe')
def next_frame():
    if frames_ndarray is None:
        return 'No imaging file has been loaded yet.'
    global current_frame
    frame = np.squeeze(frames_ndarray[current_frame])[:,:,0]
    current_frame += play_rate
    if current_frame >= len(frames_ndarray):
        current_frame = 0
    im = Image.fromarray(frame).convert('RGB')
    output_path = os.path.join(BUFFER_IMAGE_FILEPATH, 'frame.jpeg')
    im.save(output_path)
    logging.debug(f'Saved frame {current_frame} of {file_path} at {datetime.datetime.now()}')
    return f'Saved frame {current_frame} of {file_path} at {datetime.datetime.now()}'

@app.route('/increaseplayrate')
def increase_play_rate():
    global play_rate
    if play_rate < 1000:
        play_rate *= 2
    logging.debug(str(play_rate))
    return str(play_rate)

@app.route('/decreaseplayrate')
def decrease_play_rate():
    global play_rate
    play_rate /= 2
    if play_rate < 1:
        play_rate = 1
    logging.debug(str(play_rate))
    return str(play_rate)

@app.route('/sendstringasbytes')
def sendstringasbytes():
    #my_string = {"text": "hello world! 04-06-23"}
    #return jsonify(my_string)
    #response = make_response(jsonify({'a':'b'}), 200)

    #response = make_response('test123', 200)
    #response.mimetype = "text/html"
    #return response

    #return 'hello'

    mystr = 'Hello from Flask!'
    response = {'greeting': str(base64.b64encode(bytes(mystr, 'utf-16')))}
    return jsonify(response)


@app.route('/printframes')
def print_frames():
    if frames_ndarray is None:
        return 'None'
    return str(frames_ndarray)