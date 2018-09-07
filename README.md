# start-jupyterlab-button
Simple nbextension that adds a [JupyterLab](https://github.com/jupyterlab/jupyterlab) button to the tree view of the [classic notebook interface](https://github.com/jupyter/notebook)

This can be used with local or [JupyterHub](https://github.com/jupyterhub/jupyterhub) installations where one wishes to keep the classic interface as the default but  also signal to users that JupyterLab is available. Note that one can [manually](https://jupyterlab.readthedocs.io/en/stable/getting_started/starting.html) start JupyterLab by changing `/tree` in the URL to `/lab`, but users unaware of JupyterLab may not know about this.

To install:

1. Download start-jupyterlab-button.js
2. `jupyter nbextension install [--user|--sys-prefix] start-jupyterlab-button.js`
3. `jupyter nbextension enable [--user|--sys-prefix] --section='tree' start-jupyterlab-button`
