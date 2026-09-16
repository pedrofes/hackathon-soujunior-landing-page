export default function Hero() {
    return (
        <section id="hero" className="w-full py-16 px-6 text-center border-b border-neutral/10">
            <div className="max-w-4xl mx-auto">
                <span className="text-xs uppercase font-bold text-primary tracking-wider">
                    [Hero]
                </span>
                <h1 className="font-display text-4xl font-extrabold text-secondary mt-2 mb-4">
                    Texto
                </h1>
                <p className="font-sans text-neutral max-w-xl mx-auto mb-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ex eveniet accusamus. Labore maxime sit aperiam at voluptatum. Error vitae eius quisquam commodi repudiandae vel omnis cum fugiat deserunt impedit!
                </p>
                <button className="bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-yellow-500">
                    Apoie a SouJunior
                </button>
            </div>
        </section>
    );
}
