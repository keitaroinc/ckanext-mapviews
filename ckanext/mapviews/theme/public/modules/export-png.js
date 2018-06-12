ckan.module('mapviews-export-png', function($) {
    return {
        initialize: function() {
            this.el.click(function(e){
                e.preventDefault()
                this.downloadMap()
            }.bind(this))
        },
        downloadMap: function() {
            var scrollY = window.pageYOffset;
            var container = document.body;

            window.scrollTo(0, 0);
            document.body.style.fontFamily = '"Roboto",Helvetica,Arial,sans-serif'

            html2canvas(container, {
                allowTaint: true,
                useCORS: true,
                foreignObjectRendering: true,
                ignoreElements: function(element) {
                    return false
                }
            }).then(function(canvas) {
                Canvas2Image.saveAsPNG(canvas);
                document.body.style.fontFamily = '"Roboto Condensed",Helvetica,Arial,sans-serif'                
            });
            window.scrollTo(0, scrollY);
        }
    }
})