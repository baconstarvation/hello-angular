Required
- making sure that a form is filled out
<input type="text" required />

Minimum length
<input type="text" ng-minlength=5 />

Maximum length
<input type="text" ng-maxlength=20 />

Matches a pattern
- ensuring that it matches a regex
<input type="text" ng-pattern="[a-zA-Z]" />

Email
<input type="email" name="email" ng-model="user.email" />

Number
To validate that an input field has a number
<input type="number" name="age" ng-model="user.age" />

URL
- validate and make ure that it represents a URL
<input type="url" name="homepage" ng-model="user.facebook_url" />

example:

<form name ="form" novalidate>
	<label name="email">Your email</label>
	<input type="email"
				name="email"
				ng-model="email"
				placeholder="Email Address" />
</form>


Control Variables in Forms

Unmodified Form
a boolean that tells us whether the user has modified the form. True is user hasnt touched the form; false if thety have
formName.inputFieldName.$pristine;

Modified Form
if and only if the user has actually modified hthe form. set regardless of validations on the form
formName.inputFieldName.$dirty

Valid Form
if it's valid, puts true
formName.inputFieldName.$valid

Invalid Form
if invalid, puts true
formName.inputFieldName.$invalid

Errors
If a validation fails then this property will be ture; if false, then the value has passed the input field
formName.inputfieldName.$error


Classes for Style
.ng-pristine {}
.ng-dirty {}
.ng-valid {}
.ng-invalid {}















