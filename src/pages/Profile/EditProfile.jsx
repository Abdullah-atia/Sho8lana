import { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useQueryClient } from "react-query";
import { useUpdateUser } from "../../hooks/useUserData";
import toast from "react-hot-toast";

function EditProfile() {
    const { userId } = useParams();
    const queryClient = useQueryClient();
    const { mutate: updateUser } = useUpdateUser();
    const { register, handleSubmit } = useForm();
    const [image, setImage] = useState(null); // State to store uploaded image

    const onSubmit = async (data) => {
        // Combine form data with image
        const newData = { ...data, image };

        // Send request to update user data
        try {
            await updateUser(userId, newData);
            queryClient.invalidateQueries(['user', userId]);
        } catch (error) {
            toast.error(error.message)
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImage(reader.result);
        };
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name")} placeholder="name"/>
                <input type="email" {...register("email")} placeholder="email" />
                <input type="tel" {...register("phonenumber")} placeholder="phone number" />
                {/* Input for uploading image */}
                <input type="file" onChange={handleImageUpload}  />
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default EditProfile;
