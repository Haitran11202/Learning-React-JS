import { useState, useEffect } from "react";
export default function Image() {
    const [avatar, setAvatar] = useState();
    useEffect(() => {
// cleanup funtion
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        }
    }, [avatar])
    const handlePreviewAvatar = (e) => {

        const file = e.target.files[0];
        if (file) {

            file.preview = URL.createObjectURL(file);
        }else{
            console.log("Ảnh không tồn tại");
        }
        console.log(file);
        setAvatar(file);

    }
    return (
        <div>
            <input
                type="file"
                onChange={handlePreviewAvatar} />
            <div>
                {avatar && (
                    <img src={avatar.preview} />
                )}
            </div>
        </div>
    )
}