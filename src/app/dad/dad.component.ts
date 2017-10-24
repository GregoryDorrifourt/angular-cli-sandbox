import { Component, OnInit } from '@angular/core';
import { HelperService } from "../shared/services/helper.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-dad',
    templateUrl: './dad.component.html',
    styleUrls: ['./dad.component.scss']
})
export class DadComponent implements OnInit {

    formData: FormGroup;

    companies: Array<{}> = [
        {value: "", label: "-- Sélectionner un partenaire --"},
        {value: "company_1", label: "Company 1"},
        {value: "company_2", label: "Company 2"},
        {value: "company_3", label: "Company 3"},
        {value: "company_4", label: "Company 4"},
        {value: "company_5", label: "Company 5"}
    ];

    departments: Array<{}> = [
        {value:"", label: "-- Sélectionner un département --"},
        {value:"01", label: "Ain"}
    ];

    constructor(public fb: FormBuilder, private helper: HelperService) {

    }

    ngOnInit() {
        let PATTERNS = this.helper.formPatterns;

        let formValidity = {
            required: ['', Validators.required],
            email: ['', [Validators.required, Validators.pattern(PATTERNS['EMAIL'])]]
        };

        this.formData = this.fb.group({
            //Form part 1
            contract_id: formValidity.required,
            company_name: formValidity.required,
            seller_id: formValidity.required,
            contract_signed_at: formValidity.required,

            // Form part 2
            type_client: formValidity.required,
            prefix: formValidity.required,
            lastname: formValidity.required,
            firstname: formValidity.required,
            birth_date: formValidity.required,
            birth_department: formValidity.required,
            mobile: formValidity.required,
            fixe: formValidity.required,
            email: formValidity.required,
            identity_document: formValidity.required,
            identity_document_number: formValidity.required,

            //Form part 3
            keep: formValidity.required,
            keep_number: formValidity.required,
            annuaire_universel: "",
            anti_prospection: "",
            sans_adresse_complete: "",
            sans_prenom_complet: "",
            anti_annuaire_inverse: "",
            controle_parental: "",

            //Form part 4
            address: formValidity.required,
            building: "",
            stage: "",
            stairs: "",
            city: formValidity.required,
            postal_code: formValidity.required,
            pto: "",

            //Form part 5
            offer: formValidity.required,

            //Form part 6
            payment_method: formValidity.required
        });
    }

    /**
     * @function submitForm
     */
    submitForm() {

    }

    /**
     * @function rbChange
     * @description Fixes bootstrap issue. Label click is not triggering change event for radio button.
     * @param input
     * @param value
     */
    rbChange(input, value){
        console.log(value);
        this.formData.value[input] = value;
    }

}
