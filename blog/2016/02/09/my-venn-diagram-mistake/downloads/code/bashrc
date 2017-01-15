stty -ixon
cd ~

HOMEDRIVE=$(perl -e '($var) = $ENV{HOMEDRIVE} =~ /([A-Z]):/; print "/".lc($1)')
if [ $(perl -e '($var) = $ENV{PATH} !~ /tex/i; print STDOUT $var') ]
then
    echo "No LaTeX found!  Added $HOMEDRIVE/MikTeXPortable/miktex/bin
    to path."
    PATH=$PATH:$HOMEDRIVE/MikTeXPortable/miktex/bin
    echo "IMPORTANT: Close MikTeX Taskbar icon before exit."
    echo "Otherwise this shell WON'T close."
    miktex-taskbar-icon
fi

loc_repo=(
'resume2015'
)

for f in ${loc_repo[@]}; do
    cd $f
    git remote set-url origin $HOMEDRIVE/$f.git
    cd -
done
