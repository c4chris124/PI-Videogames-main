export default function validate(input){
    let errors = {}

    if (!input.name) {
        errors.name = 'Name is required'
    }
    
    if(!input.background_image){
        errors.background_image = 'A URL image is required'
    } else if(!/^(ftp|http|https):\/\/[^ "]+$/.test(input.background_image)) {
        errors.background_image = 'A valid URL is required ex. http://...'
    }
    
    if (!input.description){
        errors.description = 'A description is required'
    } 
    
    if(!input.released){
        errors.released = 'A date is required'
    } else if(!/^\d{2}[./-]\d{2}[./-]\d{4}$/.test(input.released)){
        errors.released = 'A valid date is required'
    }
    
    if (!input.rating){
        errors.rating = 'A rate is required'
    } else if(!/^[1-5]$/.test(input.rating)){
        // needs to be fixed
        errors.rating = 'A valid rating is required, numbers between 1 and 5'
    }

    return errors
}