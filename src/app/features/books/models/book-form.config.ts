import { Validators } from "@angular/forms";
import { GenericFormControlType } from "src/app/shared/generic-form/enums/generic-form-control-type.enum";
import { GenericFormConfigModel } from "src/app/shared/generic-form/models/generic-form-config.model";

export const BOOKS_FORM_CONFIG: GenericFormConfigModel = {
    controls: [
        {
            controlName: 'collection_id',
            controlType: GenericFormControlType.CONTROL,
            componentType: 'input',
            config: {
                controlName: 'collection_id',
                componentType: 'input',
                controlLabel: 'Collection Id',
                value: ''
            }
        },
        {
            controlName: 'file',
            controlType: GenericFormControlType.CONTROL,
            componentType: 'input-file',
            fileType: 'image',
            config: {
                controlName: 'file',
                componentType: 'input-file',
                controlLabel: 'Select Image',
                value: null
            }
        },
        {
            controlName: 'year',
            controlType: GenericFormControlType.CONTROL,
            componentType: 'input',
            config: {
                controlName: 'year',
                componentType: 'input',
                controlLabel: 'Year',
                value: ''
            }
        },
        {
            controlName: 'author',
            controlType: GenericFormControlType.CONTROL,
            componentType: 'input',
            config: {
                controlName: 'author',
                componentType: 'input',
                controlLabel: 'Author',
                value: '',
                validators: [
                    Validators.required
                ]
            }
        },
        {
            controlName: 'title',
            controlType: GenericFormControlType.CONTROL,
            componentType: 'input',
            config: {
                controlName: 'title',
                componentType: 'input',
                controlLabel: 'Title',
                value: '',
                validators: [
                    Validators.required
                ]
            }
        },
        {
            controlName: 'description',
            controlType: GenericFormControlType.CONTROL,
            componentType: 'input',
            config: {
                controlName: 'description',
                componentType: 'input',
                controlLabel: 'Description',
                value: ''
            }
        }
    ]
}