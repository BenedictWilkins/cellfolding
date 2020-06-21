# Cell Folding - Jupyter Notebook Extension

A Jupyter Notebook extension that enabled cell folding. Double clicking on the left side of a code cell will toggle collapse/expand.

## Install
```
pip install nbextension-cellfolding
jupyter nbextension install --py cellfolding --user
jupyter nbextension enable --py cellfolding --user 
```
## Install Jupyter Contrib (Optional)
```
pip install jupyter_contrib_nbextensions
pip install jupyter_nbextensions_configurator
jupyter contrib nbextension install --user 
jupyter nbextensions_configurator enable --user
```

## Contributing

The repo is in early days and implements basic functionality, it has no effect on published notebooks and the layout will not be remembered if the notebook is closed. Basically, there is a bunch of stuff to do, if you want to contribute please make a pull request.
