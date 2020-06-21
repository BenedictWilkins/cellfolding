#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
    Created on 21-06-2020 12:32:28
"""
__author__ = "Benedict Wilkins"
__email__ = "benrjw@gmail.com"
__status__ = "Development"

import setuptools

setuptools.setup(name='nbextension-cellfolding',
      version='0.0.3',
      description='',
      url='https://github.com/BenedictWilkinsAI/cellfolding',
      author='Benedict Wilkins',
      author_email='brjw@hotmail.co.uk',
      license='GNU General Public License v3 (GPLv3)T',
      packages=['cellfolding'],
      install_requires=['jupyter'],
      include_package_data=True,
      classifiers=[
        "Programming Language :: Python :: 3.7",
        "Development Status :: 2 - Pre-Alpha",
        "License :: OSI Approved :: GNU General Public License v3 (GPLv3)",
        "Operating System :: OS Independent",
      ])