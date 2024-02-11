

# Python setup.py deprecated:
```
Starting >>> my_python_node
--- stderr: my_python_node                   
/usr/lib/python3/dist-packages/setuptools/command/install.py:34: SetuptoolsDeprecationWarning: setup.py install is deprecated. Use build and pip and other standards-based tools.
  warnings.warn(
---
Finished <<< my_python_node [0.64s]

Summary: 1 package finished [1.19s]
  1 package had stderr output: my_python_node
```

Solution: ```pip install setuptools==58.2.0```