const main = async (schema, data) => {
    try {
        // Si falla esta validación, pasa al catch
        await schema.validateAsync(data)
    } catch (error) {
        
    }
}