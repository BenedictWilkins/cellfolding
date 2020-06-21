# Cell Folding - Jupyter Notebook Extension

A Jupyter Notebook extension that enabled cell folding. Double clicking on the left side of a code cell will toggle collapse/expand.

## Demo:

Your code with millions of imports and super complex logic:
[![][1]][1]

Simply double clicking left of the code cell will collapse it to a single line:

[![][2]][2]

Double clicking again will expand the cell, taking it back to the orignal size.

[1]: https://i.stack.imgur.com/xyZbh.png
[2]: https://i.stack.imgur.com/Xo4LV.png


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

## Jupyter Configurator

This extension is also compatible with [nbextension configurator][3] and can be enabled via the `nbextensions` tab.

[3]: https://github.com/Jupyter-contrib/jupyter_nbextensions_configurator


## Contributing

The repo is in early days and implements basic functionality, it has no effect on published notebooks and the layout will not be remembered if the notebook is closed. Basically, there is a bunch of stuff to do, if you want to contribute please make a pull request.
