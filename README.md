highlightedAutocomplete
=======================
This plugin augments [jQueryUI's Autocomplete widget](http://jqueryui.com/autocomplete/) to highlight the portion of each suggestion that matches the search term.
To use, just call `highlightedAutocomplete()` on a jQuery selector, with the usual parameters needed for that widget. This will, by default, wrap each matching substring in each suggestion in a `&ltspan&gt` element with class `autocomplete-term`.
Options
-------
If, instead of `autocomplete-term`, we would like `suggestion-term` to be applied to the suggestions, we can do this by adding a `highlightClass` parameter:
```javascript
$('.autocomplete').highlightedAutoComplete({ highlightClass: 'suggestion-term' });
```
Alternately, if you want even more customization of the control used to highlight text, you can pass a custom function to generate the control. This function will be passed a single parameter - the substring in the suggestion about to be replaced. For example, if we'd like to wrap matches in a simple anchor tag, we can write
```javascript
function getHighlightControl(text) {
  return '<a>' + text + '</a>';
}

$('.autocomplete').highlightedAutoComplete({ highlightControl: getHighlightControl });
```
By default, case insensitive replacements will be performed, but if this is not desired, it can be disabled with the `caseInsensitive` parameter:
```javascript
$('.autocomplete').highlightedAutoComplete({ caseInsensitive: false });
```
Technicalities
--------------
The options object passed to highlightedAutocomplete will be stored using jQuery's data function with the key `autocomplete`. Additionally, it will be passed to the jQueryUI `autocomplete()` function, so you can customize the basic control with the same options parameters.
Oh, and to accomplish the default parameters of my plugin, I made the MergeSet helper class, which is included at the top of this source file.
