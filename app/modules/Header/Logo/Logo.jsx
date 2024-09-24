import { LogoImage } from '@/static-data/Logo';

export default function Logo() {
    return (
        <div>
            {LogoImage.map((image, index) => (
                <img 
                    key={index}
                    src={image.logo} 
                    alt="Logo"
                />
            ))}
        </div>
    );
}
