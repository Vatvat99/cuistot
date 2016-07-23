(function() {

    if (document.getElementById('navButton') !== null) {

        var navButton = document.getElementById('navButton'),
        navigation = document.getElementById('navigation')
        navigationContainer = navigation.parentElement;

        var toggleNavigation = function(event){
            navigationContainer.classList.toggle('is-nav-open');
        }

        navButton.addEventListener('click', toggleNavigation);

    }

})();
