export const fileUpload = async (file) => {
    if (!file) throw new Error('No tenemos ningún archivo')
    const cloudUrl = 'https://api.cloudinary.com/v1_1/react-proyects-713/upload';
    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);
    try {
        const res = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if (!res.ok) throw new Error('No se pudo subir imagen');
        const cloudResp = await res.json();
        return cloudResp.secure_url;
    } catch (error) {
        throw new Error(error.message);
    }
}
