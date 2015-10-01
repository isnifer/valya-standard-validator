export default (props) => {
    return {
        validator (value, params) {
            if (value) {
                return Promise.resolve(true);
            }

            return Promise.reject(params.message);
        },
        params: {
            message: props && props.message || 'Field is required'
        }
    }
}
