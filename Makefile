#
# For more information on some of the magic targets, variables and flags used, see:
#  - [1] https://www.gnu.org/software/make/manual/html_node/Special-Targets.html
#  - [2] https://www.gnu.org/software/make/manual/html_node/Secondary-Expansion.html
#  - [3] https://www.gnu.org/software/make/manual/html_node/Suffix-Rules.html
#  - [4] https://www.gnu.org/software/make/manual/html_node/Options-Summary.html
#  - [5] https://www.gnu.org/software/make/manual/html_node/Special-Variables.html
#

# Ensure (intermediate) targets are deleted when an error occurred executing a recipe, see [1]
.DELETE_ON_ERROR:

# Enable a second expansion of the prerequisites, see [2]
.SECONDEXPANSION:

# Disable built-in implicit rules and variables, see [3, 4]
.SUFFIXES:
MAKEFLAGS += --no-builtin-rules
MAKEFLAGS += --no-builtin-variables

# Disable printing of directory changes, see [4]
MAKEFLAGS += --no-print-directory

# Warn about undefined variables -- useful during development of makefiles, see [4]
MAKEFLAGS += --warn-undefined-variables

# Show an auto-generated help if no target is provided, see [5]
.DEFAULT_GOAL := help

# Ensure the git submodule is initialized
$(shell test -f .make/.git || (rm -rf .make .git/modules && git submodule update --init))

# Read project variables
include Makefile.vars
# Will be created if it does not exists in a second pass
-include Makefile.secrets

# Include generic makefiles
include .make/help.mk
include .make/crypt.mk
include .make/contentful.mk
