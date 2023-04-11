# hdf5Viewer
A react-flask app for displaying images stored in an HDF5 file. The app is able to display gigabyte sized files by streaming a limited number of frames at a time.

<div>
Dependencies:
    <ul>
        <li>Python >=3.8.3
            <ul>
                <li>Flask >=2.2.3</li>
                <li>h5py >=3.8.0</li>
                <li>imageio >=2.26.1</li>
                <li>matplotlib >=3.7.1</li>
                <li>numpy >=1.24.2</li>
                <li>Pillow >=9.4.0</li>
                <li>scikit-image >=0.20.0</li>
                <li>scikit-learn >=1.2.2</li>
            </ul>
        </li>
        <li>
            Node.js >=18.5.0 (with npm >=9.5.0)
        </li>
    </ul>
</div>

<div>
Installation
    <ol>
        <li>Clone the repo</li>
        <li>Install dependencies</li>
        <li>Configure the flask server in backend/run.py (optional)</li>
        <li>Configure the node server in frontend/package.json (optional)</li>
        <li>
            Start the flask server
                &emsp;<ul>
                        <li>cd backend</li>
                        <li>python run.py</li>
                      </ul>
        </li>
        <li>
            Install node.js packages
                &emsp;<ul>
                        <li>cd frontend</li>
                        <li>npm install</li>
                      </ul>
        </li>
        <li>
            Start the node server (must be in the folder containing package.json)
                &emsp;<ul>
                        <li>npm start</li>
                      </ul>
        </li>
        <li>If using default configurations, go to localhost:5000 in your browser to use the application.</li>
    </ol>
</div>
