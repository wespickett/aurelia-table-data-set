import {customElement, bindable, ObserverLocator} from 'aurelia-framework';
import {inject} from 'aurelia-dependency-injection';

@customElement('table-data-set')
@inject(Element, ObserverLocator)
export class TableDataSet {

    editMode = [];
    
    constructor(element, observerLocator) {
        this.element = element;

        this.observerLocator = observerLocator;

        this.editable = this.element.hasAttribute('edit');
        this.observerLocator.getObserver(this.element, 'edit')
                            .subscribe(this.editChanged.bind(this));

        this.canDelete = this.element.hasAttribute('delete');
        this.observerLocator.getObserver(this.element, 'delete')
                            .subscribe(this.deleteChanged.bind(this));

        this.observerLocator.getObserver(this.element, 'value')
                            .subscribe(this.dataSetValueChanged.bind(this));
    }

    deleteRow(index) {
        if (this.canDelete && window.confirm('Really delete?')) {
            this.dataSet.splice(index, 1);
        }
    }

    editRow(index) {
        if (this.editable) {
            this.editMode[index] = !this.editMode[index];
        }
    }

    editChanged(newValue) {
        this.editable = !!newValue;
    }

    deleteChanged(newValue) {
        this.canDelete = !!newValue;
    }

    dataSetValueChanged(newValue) {
        this.dataSet = newValue;
        this.dataCols = Object.keys(this.dataSet[0]);
    }
}