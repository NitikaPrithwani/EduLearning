export default function SubscribeBtn() {
    return (
        <button
            type="submit"
            className="font-bold py-4 px-7 rounded-xl md:me-20 md:mx-12"
            style={{
                backgroundImage: "url('/HomePageImages/plain-background.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            Subscribe
        </button>
    );
}
