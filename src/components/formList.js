
export default () => {
  return (
    [
        {
           "key": "regform",
           "title": "Registration Form",
           "desc": "please Fill in the form given below",
           "model": [
              {
                 "name": "Full Name",
                 "className": "form-row",
                 "elements": [
                    {
                       "key": "prefix",
                       "label": "Prefix",
                       "props": {
                          "required": false,
                          "className": "form-control"
                       },
                       "className": "form-group col-md-3"
                    },
                    {
                       "key": "firstName",
                       "label": "first Name",
                       "props": {
                          "required": true,
                          "className": "form-control"
                       },
                       "className": "form-group col-md-3"
                    },
                    {
                       "key": "LastName",
                       "label": "Last Name",
                       "props": {
                          "required": true,
                          "className": "form-control"
                       },
                       "className": "form-group col-md-3"
                    }
                 ]
              },
              {
                 "name": "Address",
                 "className": "form-row",
                 "elements": [
                    {
                       "key": "StreetAddress",
                       "label": "Street Addresss",
                       "props": {
                          "required": true,
                          "className": "form-control"
                       },
                       "className": "form-group form col-md-12"
                    },
                    {
                       "key": "StreetAddress2",
                       "label": "Street Address 2",
                       "props": {
                          "required": false,
                          "className": "form-control"
                       },
                       "className": "form-group form col-md-12"
                    },
                    {
                       "key": "City",
                       "label": "city",
                       "props": {
                          "required": true,
                          "className": "form-control"
                       },
                       "className": "form-group form col-md-6"
                    },
                    {
                       "key": "GeoState",
                       "label": "state / province",
                       "props": {
                          "required": true,
                          "className": "form-control"
                       },
                       "className": "form-group form col-md-6"
                    },
                    {
                       "key": "zip",
                       "label": "Postal / ZIP",
                       "props": {
                          "required": true,
                          "className": "form-control",
                          "min": 0,
                          "max": 6
                       },
                       "className": "form-group form col-md-6"
                    },
                    {
                       "key": "country",
                       "label": "Country",
                       "control": "select",
                       "props": {
                          "className": "form-control"
                       },
                       "options": [
                          {
                             "default": "Select Your Country"
                          },
                          "india",
                          "pakistan",
                          "USA",
                          "Dubai",
                          "Not Listed"
                       ],
                       "className": "form-group form col-md-6"
                    }
                 ]
              },
              {
                 "name": "Phone Number",
                 "className": "form-row",
                 "elements": [
                    {
                       "key": "AreaCode",
                       "label": "Area Code",
                       "props": {
                          "required": true,
                          "className": "form-control",
                          "min": 3,
                          "max": 3
                       },
                       "className": "form-group col-md-1"
                    },
                    {
                       "key": "PhoneNumber",
                       "label": "Phone Number",
                       "props": {
                          "required": true,
                          "className": "form-control",
                          "min": 10,
                          "max": 10
                       },
                       "className": "form-group col-md-2"
                    }
                 ]
              },
              {
                 "name": "CHeck Me",
                 "className": "form-row",
                 "elements": [
                    {
                       "key": "checkME",
                       "label": "Check Me Out",
                       "type": "checkbox",
                       "props": {
                          "required": false,
                          "className": "form-check-input",
                          "value": "on"
                       },
                       "className": "form-group col-md-12"
                    }
                 ]
              }
           ]
        },
        {
           "key": "webform",
           "title": "Website Design Request",
           "desc": "Fill out the form to request a design",
           "model": [
              {
                 "name": "Full Name",
                 "className": "form-row",
                 "elements": [
                    {
                       "key": "firstName",
                       "label": "first Name",
                       "props": {
                          "required": true,
                          "className": "form-control"
                       },
                       "className": "form-group col-md-3"
                    },
                    {
                       "key": "LastName",
                       "label": "Last Name",
                       "props": {
                          "required": true,
                          "className": "form-control"
                       },
                       "className": "form-group col-md-3"
                    }
                 ]
              },
              {
                 "name": "Email",
                 "className": "form-row",
                 "elements": [
                    {
                       "key": "email",
                       "label": "email",
                       "type": "email",
                       "props": {
                          "required": true,
                          "className": "form-control",
                          "placeholder": "ex: praful@forms.com"
                       },
                       "className": "form-group form col-md-6"
                    }
                 ]
              },
              {
                 "name": "Phone Number",
                 "className": "form-row",
                 "elements": [
                    {
                       "key": "AreaCode",
                       "label": "Area Code",
                       "props": {
                          "required": true,
                          "className": "form-control",
                          "min": 3,
                          "max": 3
                       },
                       "className": "form-group col-md-1"
                    },
                    {
                       "key": "PhoneNumber",
                       "label": "Phone Number",
                       "props": {
                          "required": true,
                          "className": "form-control",
                          "min": 10,
                          "max": 10
                       },
                       "className": "form-group col-md-2"
                    }
                 ]
              },
              {
                 "name": "company",
                 "className": "form-row",
                 "elements": [
                    {
                       "key": "company",
                       "label": "company",
                       "props": {
                          "required": true,
                          "className": "form-control"
                       },
                       "className": "form-group col-md-3"
                    }
                 ]
              },
              {
                 "name": "Type of Business",
                 "className": "form-row",
                 "elements": [
                    {
                       "key": "Business",
                       "label": "Business",
                       "control": "select",
                       "props": {
                          "className": "form-control"
                       },
                       "options": [
                          {
                             "default": "Select Your Business"
                          },
                          "Technology",
                          "food",
                          "beauty",
                          "finance",
                          "Not Listed"
                       ],
                       "className": "form-group form col-md-4"
                    }
                 ]
              },
              {
                 "name": "CHeck Me",
                 "className": "form-row",
                 "elements": [
                    {
                       "key": "checkME",
                       "label": "Check Me Out",
                       "type": "checkbox",
                       "props": {
                          "required": false,
                          "className": "form-check-input",
                          "value": "on"
                       },
                       "className": "form-group col-md-12"
                    }
                 ]
              }
           ]
        }
      ]
  )
}
