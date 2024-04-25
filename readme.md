# for C++ setup/help

https://code.visualstudio.com/docs/cpp/config-mingw#_prerequisites

# importing libraries

simialr to import we use "#include<>" and within the braces the library name

iostream: input/output operations
vector: dynamic array

instead of importing all the libraries we can have(and we will get access to all):

#include <bits/stdc++.h>

# namespaces

it helps in identifying between diferent blocks


# cout and endl

by default c++ doesnt add anything so if we want to endline or go to new line , use endl and  /n

use cout<<"Hello World!"<<endl;
or  cout<<"Hello World!";

# I/0 operations

difference between \n and endl ==> endl insert a new line and flush the output stream
 
and system gets slower because of it, so better to use \n for new line