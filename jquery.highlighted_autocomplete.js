function MergeSet(options) {
    this.merge(options);
}

MergeSet.prototype.merge = function(other) {
    for (key in other) {
        this[key] = other[key];
    }

    return this;
}

(function() {
    $.fn.highlightedAutocomplete = function(options) {
        options = new MergeSet({
            highlightClass: 'autocomplete-term',
            highlightControl: function(term) {
                return $('<span/>', { class:this.highlightClass }).text(term).outerHtml();
            },
            caseInsensitive: true,
        }).merge(options);

        if (options['open'] !== undefined) {
          options.afterOpen = options.open
        }

        options.open = function() {
            var data = $(this).data('autocomplete');
            var searchTerm = $(this).val();
            var modifiers = data.caseInsensitive ? 'ig' : 'g'; // global replace either way

            var regex = new RegExp('(' + searchTerm + ')', modifiers);

            $(this).autocomplete('widget').find('a').each(function(index, link) {
                $(link).html($(link).text().replace(regex, data.highlightControl('$1')));
            });
        }

        $(this).data('autocomplete', options).autocomplete(options).on('open', options.afterOpen);
    }
})();
