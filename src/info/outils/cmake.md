# CMake

`cmake` est un utilitaire open-source et multi-plateformes qui permet indépendemment du compilateur de générer des fichiers utilisables pour la compilation. De plus, l'IDE [CLion](https://www.jetbrains.com/clion/) utilise nativement `cmake`, ce qui veut dire qu'il va te faire gagner énormément de temps à chaque fois que tu travailleras avec un projet configuré avec `cmake`.

Son installation est très simple, il te suffit d'exécuter

```bash
sudo apt-get install cmake
```
## Explications du fonctionnement

`cmake` est à utiliser avec le programme `make` (tu n'as pas à l'installer en plus, il est déjà présent sur ton ordinateur).

À l'origine, les projets en `C` étaient compilés avec `make` grâce à des fichiers de configuration, des `Makefile`. Pour te donner une idée de ce à quoi ils ressemblent, voici un exemple (qui n'a rien à voir avec le Club Robot) :

```make
CC        := gcc
LD        := gcc

vpath %.c $(SRC_DIR)

define make-goal
$1/%.o: %.c
	$(CC) -std=gnu99 -Wall -m32 -g -I $(INCLUDES) -c $$< -o $$@
endef

.PHONY: all checkdirs clean

all: checkdirs build/client

build/client: $(OBJ_CLI)
	$(LD) -m32 $^ -o $@ -lm -lpthread -g

checkdirs: $(BUILD_DIR)

$(BUILD_DIR):
	@mkdir -p $@

clean:
	@rm -rf $(BUILD_DIR)

distclean:
	@rm -rf $(BUILD_DIR)
	@-rm -f *.tar.gz || true

$(foreach bdir,$(BUILD_DIR),$(eval $(call make-goal,$(bdir))))
```

Si tu es en train de te dire que c'est illisible, c'est normal et tu n'as pas à apprendre cette syntaxe rassure-toi.

En effet, l'objectif de `cmake` et de rajouter une surcouche à l'étape de compilation en permettant au programmeur d'écrire dans un anglais plus lisible (c'est à dire qu'il rajoute un couche d'abstraction).

Ainsi, tu vas travailler avec des fichiers de configuration nommés `CMakeLists.txt`. Voici un petit exemple du fichier qui gère tout le code du robot principal :

```cmake
set(ROBOT_PRINC_SOURCE
        ../Commun/Strategie.cpp
        librobot/Robot.cpp
        librobot/MecaManager.cpp
        librobot/Strategie.cpp
        #librobot/Ascenseur.cpp
        petri/Deplacement.cpp
        petri/Servo.cpp
        petri/Moteur.cpp
        petri/Utils.cpp
        petri/PetriCommon.cpp
        librobot/StrategyGenerator/MagicStrategy.cpp)

add_library(robotPrincipal STATIC ${ROBOT_PRINC_SOURCE})
add_library(robotPrincipalInterfaceElec STATIC ${ROBOT_PRINC_SOURCE})

target_link_libraries(robotPrincipal Cartes Robot Strategie)
target_link_libraries(robotPrincipalInterfaceElec Robot_Interfacer_Elec Cartes Strategie)

add_executable(debug_calibration_depla debug/CalibrationDepla.cpp)
target_compile_options(debug_calibration_depla PUBLIC -Wno-deprecated)
target_link_libraries(debug_calibration_depla robotPrincipal)

include_directories(/usr/local/include/wiic/)

set(wiimote_sources IA/IAWiimote.cpp wiimote/Wiimote.cpp)
add_executable(IAWiimote ${wiimote_sources})
include_directories(/usr/local/include/wiic/)

add_executable(IAPrincipal IA/IAPrincipal.cpp)

if (RASPI)
	message(STATUS "Compiling IAPrincipal for the raspi")
	link_directories(/usr/arm-linux-gnueabihf/lib)
	target_link_libraries(IAPrincipal robotPrincipal PetriRuntime dl)

else()
	target_link_libraries(IAWiimote robotPrincipal wiicpp)
	target_link_libraries(IAPrincipal robotPrincipal)
endif()


add_executable(IATestDeplacement IA/IATestDeplacement.cpp)
target_link_libraries(IATestDeplacement robotPrincipal)

add_executable(IATestMeca IA/IATestMeca.cpp)
target_link_libraries(IATestMeca robotPrincipal)
```

Ensuite, une fois ces fichiers bien configurés, il te suffit d'aller dans la racine du dossier et de taper les commandes suivantes :

```bash
mkdir -p build
cd build
cmake ..
make all
```

Tout est automatisé ; dans un premier temps les `Makefile`s vont être générés puis la commande `make` va lire ces fichiers pour les compiler grâce à `g++`. À la fin du processus (la compilation peut prendre jusqu'à une dizaine de minutes en tout), tu auras les fichiers binaires dans le dossier `/info/build` prêts à être exécutés.

## Cheatsheet

Ce paragraphe n'a bien sûr pas pour but d'être exhaustif, si tu as besoin de trouver des commandes spécifiques je te conseille d'aller voir [vers le wiki](https://gitlab.kitware.com/cmake/community/wikis/home).

### `CMakeLists.txt` principal

Pour une meilleure lisibilité, les configurations sont réparties dans chaque dossier. Il y a un `CMakeLists.txt` principal qui fait des configurations globales, et qui appelle ensuite les `CMakeLists` des sous-dossiers pour compartimenter le simulateur du robot par exemple.

* `cmaks_minimum_required(VERSION 3.0)` - certaines fonctionnalités de `cmake` sont apparues dans les versions les plus récentes donc il faut toujours spécifier ce flag
* `project(root)` - définission du nom global du projet
* `option(<NAME> "<comments>" [DEFAULT])` - permets de donner des options pendant le lancement de `cmake`. Par exemple, avec l'`option(BITS "Build en 32 ou 64 bits" 64)`, on peut forcer la compilation en 32 bits avec l'appel `cmake .. -DBITS=32`
* `add_definitions(<DEFINITION>)` - spécifie des définitions pour la compilation
* `add_subdirectory(<PATH>)` - appelle le `CMakeLists` d'un dossier enfant, par exemple celui du simulateur
* `link_directories(/usr/local/lib/)` - permets d'utiliser des librairies déjà existantes (par exemple, celle de [box2d](http://box2d.org/) pour la gestion du moteur physique)

### Commandes les plus utilisées

* **conditions** :
  ```if(COLOR)
        set(CMAKE_COLOR_MAKEFILE ON)
     else()
        set(CMAKE_COLOR_MAKEFILE OFF)
     endif()
  ```
  Tests d'égalité : `${BITS} EQUAL 32`, `${CMAKE_CXX_COMPILER_ID} STREQUAL "^(Apple)?Clang$"`
* **créer des variables** : **`set(<NAME> <VALUE)`** ; exemple : `set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++14")` ; `set(FILES_SOURCE src/file1.cpp src/file2.cpp)`
* **librairies**
  - Créer une librairie : `add_library(<NAME> STATIC ${FILES_SOURCE})`
  - Lier une cible vers une librairie : `target_link_libraries(<TARGET> <Lib1> [Lib2] [...])`
  - Récupérer les fichiers d'une librairie externe : `find_package(<NAME>)` ([wiki](https://cmake.org/cmake/help/v3.0/command/find_package.html))
* créer un nouvel exécutable : `add_executable(<NAME> <file1> [file2] [...])`
