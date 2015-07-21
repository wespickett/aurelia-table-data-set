# aurelia-table-data-set

Takes array of json objects and makes it into a table where you can edit and delete rows

JSON object should be an array of objects. Objects should be flat with primitive values.
```js
[{
    one: 1,
    two: 2,
    three: 3
},
{
    four: 4,
    five: 5,
    six: 6
}]
```

Implement in your template using:
```html
<table-data-set value.bind="model.value" edit delete></table-data-set>
```
#### Attributes

edit - allow rows of data to be edited

delete - allow rows of data to be deleted