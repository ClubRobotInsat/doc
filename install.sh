#/bin/bash
bi=$(which mdbook)
if [ -z $bi ]
then
  cargo install mdbook
else
fi
