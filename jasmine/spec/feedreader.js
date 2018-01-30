/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        
        //loops through each feed to make sure it has URL and not empty
        it('Url defined and not empty', function() {
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url).toBeTruthy();
            
        });
            });



       
        //loops through each feed to make sure it has name and not empty
        it('Name defined and not empty', function() {
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe("");

            });
        });

    });


   
    
    //Test named "the menu" that ensures it's element is hidden
    describe('The menu', function() {

        it('Ensures Menu element is hidden', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);

        });

       
         /*Ensures the menu changes visibility when menu icon is clicked 
         *and tests if the menu displays when clicked 
         *and it hides when clicked again*/
        it('Ensures the menu changes visibility', function() {
            var menu = $('.menu-icon-link');
            menu.trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            menu.trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    });


    
     /*Test named "Initial Entries" and ensures when the loadFeed
     *function is called and completes its work */
    describe('Initial Entries', function() {
        beforeEach(function(done) {
            var id = 0;
            loadFeed(id, done);
        });
        
        //Test to ensure there is at least a single entry within feed
        it('single entry element within the feed', function(done) {
            expect($('.entry').length).not.toBe(0);
            done();
        });
    });

    /*Test named "New Feed Selection" ensures when a new feed
    *is loaded by the loadFeed function and content changes */
    describe('New Feed Selection', function() {
        var currentfeed;
        var newfeed;
        beforeEach(function(done) {
            //Cureent Feed
            var id = 0;
            loadFeed(id, function() {
                currentfeed = $('.feed').html();
                //The Second new Feed
                var id = 1;
                loadFeed(id, function() {
                    newfeed = $('.feed').html();
                    done();
                });
            });
        });

        it('Ensures when a new feed is loaded', function(done) {
            expect(currentfeed).not.toBe(newfeed);
            done();
        });
    });

}());