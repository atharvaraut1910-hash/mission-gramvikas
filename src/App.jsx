import village from "./village.jpg";

function App() {
  return (
    <div className="bg-gray-100">

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/70 text-white flex justify-between items-center px-8 py-4 backdrop-blur-md z-50">

        <h1 className="text-2xl font-bold">
          🚩 मिशन ग्रामविकास
        </h1>

        <div className="flex gap-6 text-lg">
          <a href="#about" className="hover:text-green-400">About</a>
          <a href="#mission" className="hover:text-green-400">Mission</a>
          <a href="#problems" className="hover:text-green-400">Problems</a>
          <a href="#events" className="hover:text-green-400">Events</a>
          <a href="#contact" className="hover:text-green-400">Contact</a>
        </div>

      </nav>

      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage: `url(${village})`,
        }}
      >

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero Content */}
        <div className="relative z-10 bg-white/10 border border-white/20 p-10 rounded-3xl text-center text-white backdrop-blur-md shadow-2xl max-w-2xl">

          <h1 className="text-6xl font-bold leading-tight">
            🚩 मिशन ग्रामविकास
            <br />
            महाळुंगे पडवळ
          </h1>

          <p className="mt-6 text-2xl text-gray-200">
            आपलं गाव • आपली जबाबदारी ❤️
          </p>

          <button className="mt-10 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl text-xl font-semibold transition duration-300">
            Join Mission
          </button>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-8 bg-white text-center">

        <h2 className="text-5xl font-bold text-green-700">
          आपल्या गावाबद्दल
        </h2>

        <p className="mt-8 text-xl text-gray-700 max-w-5xl mx-auto leading-10">
          महाळुंगे पडवळ हे निसर्गरम्य, ऐतिहासिक आणि विकासाच्या दिशेने
वाटचाल करणारे गाव आहे. हुतात्मा बाबू गेनू सैद आणि देशभक्त आण्णासाहेब आवटे
यांच्या प्रेरणादायी इतिहासाने समृद्ध असलेल्या या गावातील तरुणांनी एकत्र येऊन
स्वच्छता, पर्यावरण, ग्रामविकास आणि सामाजिक उपक्रमांमध्ये सक्रिय सहभाग
घेण्याचा निर्धार केला आहे.
        </p>

      </section>

      {/* Mission Section */}
      <section id="mission" className="py-24 px-8 bg-green-100">

        <h2 className="text-5xl font-bold text-center text-green-800">
          आमचं मिशन 🚩
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-16">

          <div className="bg-white p-10 rounded-3xl shadow-xl hover:scale-105 transition duration-300">
            <h3 className="text-3xl font-bold text-green-700">
              🌿 स्वच्छता
            </h3>

            <p className="mt-5 text-gray-700 text-lg">
              गाव स्वच्छ आणि सुंदर ठेवण्यासाठी विविध उपक्रम राबवणे.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-xl hover:scale-105 transition duration-300">
            <h3 className="text-3xl font-bold text-green-700">
              🌳 पर्यावरण
            </h3>

            <p className="mt-5 text-gray-700 text-lg">
              वृक्षारोपण आणि वनराई संवर्धनासाठी तरुणांना एकत्र आणणे.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-xl hover:scale-105 transition duration-300">
            <h3 className="text-3xl font-bold text-green-700">
              🤝 एकजूट
            </h3>

            <p className="mt-5 text-gray-700 text-lg">
              गावाच्या विकासासाठी सर्व तरुणांनी एकत्र काम करणे.
            </p>
          </div>

        </div>

      </section>

      {/* Problems Section */}
      <section id="problems" className="py-24 px-8 bg-gray-100">

        <h2 className="text-5xl font-bold text-center text-red-600">
          गावातील समस्या 🚧
        </h2>

        <p className="text-center text-xl text-gray-600 mt-6">
          गावातील महत्त्वाच्या समस्या आणि विकासासाठी आवश्यक मुद्दे
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-16">

          <div className="bg-white p-8 rounded-3xl shadow-xl hover:scale-105 transition duration-300">
            <h3 className="text-3xl font-bold text-red-500">
              💧 पाणी समस्या
            </h3>

            <p className="mt-4 text-lg text-gray-700">
              काही भागात नियमित पाणीपुरवठ्याची अडचण आहे.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl hover:scale-105 transition duration-300">
            <h3 className="text-3xl font-bold text-yellow-600">
              🛣️ रस्ते
            </h3>

            <p className="mt-4 text-lg text-gray-700">
              खराब रस्ते आणि दुरुस्तीची गरज असलेले भाग.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl hover:scale-105 transition duration-300">
            <h3 className="text-3xl font-bold text-blue-600">
              💡 स्ट्रीट लाईट
            </h3>

            <p className="mt-4 text-lg text-gray-700">
              काही ठिकाणी बंद किंवा अपुरी लाईट व्यवस्था.
            </p>
          </div>

        </div>

      </section>

      {/* Suggestion Section */}
      <section className="py-24 px-8 bg-white text-center">

        <h2 className="text-5xl font-bold text-green-700">
          तुमची सूचना / समस्या नोंदवा 📝
        </h2>

        <p className="text-center text-xl text-gray-600 mt-6">
          गावातील समस्या, सूचना किंवा फोटो submit करा
        </p>

        <div className="mt-16">

          <a
            href="https://forms.gle/siRBZXNp97HFzxHS6"
            target="_blank"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-2xl text-2xl font-bold transition duration-300 shadow-xl"
          >
            तुमची सूचना नोंदवा 📝
          </a>

        </div>

      </section>

{/* Gallery Section */}
<section className="py-24 px-8 bg-white text-center">

  <h2 className="text-5xl font-bold text-green-700">
    आपल्या गावाचे काही क्षण 📸
  </h2>

  <p className="mt-6 text-xl text-gray-600">
    महाळुंगे पडवळ गावाचे सुंदर दृश्य
  </p>

  <div className="grid md:grid-cols-3 gap-8 mt-16">

    <img
      src={village}
      alt="Village"
      className="rounded-3xl shadow-2xl hover:scale-105 transition duration-300"
    />

    <img
      src={village}
      alt="Village"
      className="rounded-3xl shadow-2xl hover:scale-105 transition duration-300"
    />

    <img
      src={village}
      alt="Village"
      className="rounded-3xl shadow-2xl hover:scale-105 transition duration-300"
    />

  </div>

</section>
      {/* Events Section */}
      <section id="events" className="py-24 px-8 bg-green-100 text-center">

        <h2 className="text-5xl font-bold text-green-700">
          Upcoming Events 📅
        </h2>

        <div className="mt-16 bg-green-600 text-white p-12 rounded-3xl max-w-4xl mx-auto shadow-2xl">

          <h3 className="text-4xl font-bold">
            स्वच्छता मोहीम
          </h3>

          <p className="mt-5 text-2xl">
            शनिवार • सायं. ५ वाजता
          </p>

          <p className="mt-3 text-xl">
            हुतात्मा बाबू गेनू स्मारक ते दत्त मंदिर
          </p>

        </div>

      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white text-center">

        <h2 className="text-5xl font-bold">
          संपर्क 📞
        </h2>

        <p className="mt-8 text-2xl">
          मिशन ग्रामविकास महाळुंगे पडवळ
        </p>

        <div className="mt-8 text-xl space-y-4">

          <div>
            <p className="font-bold text-green-400">
              संपर्क :
            </p>
          </div>

          <div>
            <p className="font-semibold">
              Suraj Padwal
            </p>

            <p className="text-gray-300">
              📞 9975859007
            </p>
          </div>

          <div>
            <p className="font-semibold">
              Aadesh Gade
            </p>

            <p className="text-gray-300">
              📞 8805175335
            </p>
          </div>

        </div>

        <p className="mt-8 text-xl text-gray-400">
          “तरुण एकत्र – गाव सक्षम”
        </p>
        <div className="mt-6">

  <a
    href="https://www.instagram.com/_mahalunge_padwal?igsh=MTdoZ3B0d29vNTNybg%3D%3D&utm_source=qr"
    target="_blank"
    className="text-pink-400 text-xl font-semibold hover:text-pink-300 transition duration-300"
  >
    📸 Follow us on Instagram
  </a>

</div>

      </section>
      {/* Footer */}
<footer className="bg-gray-950 text-center text-gray-400 py-6">

  <p className="text-lg">
<p className="text-lg">
  Designed & Developed by  
  <span className="text-green-400 font-semibold">
    {" "} Atharva Raut
  </span>
</p>    <span className="text-green-400 font-semibold">
      {" "}
    </span>
  </p>

</footer>

    </div>
  );
}

export default App;