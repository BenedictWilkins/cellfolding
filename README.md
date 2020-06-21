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

python -m ipykernel install --user --name=nbtt
```