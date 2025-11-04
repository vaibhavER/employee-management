// Validation rules
export default {
    required: (v) => !!v || 'This field is required',
    min: (n) => (v) => (v && v.length >= n) || `Min ${n} characters`,
    email: (v) => /.+@.+\..+/.test(v) || 'Enter a valid email',
}