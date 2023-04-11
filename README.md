# hdf5Viewer
A react-flask app for displaying images stored in an HDF5 file. The app is able to display gigabyte sized files by streaming a limited number of frames at a time.

Dependencies:
    \n\tPython >= 3.8.3
        Flask >= 2.2.3
        h5py >= 3.8.0
        imageio >= 2.26.1
        matplotlib >= 3.7.1
        numpy >= 1.24.2
        Pillow >= 9.4.0
        scikit-image >= 0.20.0
        scikit-learn >= 1.2.2
    Node.js >= 18.5.0 (with npm >= 9.5.0)

1) Clone the repo
2) Install dependencies
3) Configure the flask server in backend/run.py (optional)
4) Configure the node server in frontend/package.json (optional)
5) Start the flask server
        cd backend
        python run.py
        
6) Install node.js packages
        cd frontend
        npm install
7) Start the node server (must be in the folder containing package.json)
        npm start
        
8) If using default configurations, go to localhost:5000 in your browser to use the application.
        
