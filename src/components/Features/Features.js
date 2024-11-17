import React from "react";
import "./Features.css"; // Custom styles

// Import images
import FeatureImage1 from "../../assets/imagess/1.png";
import FeatureImage2 from "../../assets/imagess/2.png";
import FeatureImage3 from "../../assets/imagess/3.png";

function Features() {
  return (
    <section className="feature-section">
      <div className="custom-container">
        
        {/* Blockchain Sertifika */}
        <div className="feature">
          <div className="feature-image-container">
            <img
              src={FeatureImage1}
              alt="Merkeziyetsiz Sertifika"
              className="feature-image"
            />
          </div>
          <div className="feature-text">
            <h3>Merkeziyetsiz Sertifika</h3>
            <p>
              Öğrenciler, başarılarını blok zinciri üzerinden doğrulanabilir dijital sertifikalar olarak alır. Bu sertifikalar, merkeziyetsiz bir ağda saklanır ve her zaman erişilebilir durumdadır.
            </p>
          </div>
        </div>

        {/* Öğrenci ve Eğitmen Kontrolü */}
        <div className="feature">
          <div className="feature-image-container">
            <img
              src={FeatureImage2}
              alt="Öğrenci ve Eğitmen Kontrolü"
              className="feature-image"
            />
          </div>
          <div className="feature-text">
            <h3>Öğrenci ve Eğitmen Kontrolü</h3>
            <p>
              Öğrenciler ve eğitmenler, kurs seçimi ve içerik yönetimi konusunda tam kontrol sahibidir. Her kullanıcı, kendi eğitim sürecini yönetebilir ve değerlendirme sürecine katkıda bulunabilir.
            </p>
          </div>
        </div>

        {/* Güvenli Veri Yönetimi */}
        <div className="feature">
          <div className="feature-image-container">
            <img
              src={FeatureImage3}
              alt="Güvenli Veri Yönetimi"
              className="feature-image"
            />
          </div>
          <div className="feature-text">
            <h3>Güvenli Veri Yönetimi</h3>
            <p>
              Blok zinciri altyapısıyla, tüm veriler güvence altındadır. Öğrenci ve eğitmen bilgileri, merkezi olmayan bir şekilde saklanarak, gizliliği ve güvenliği üst düzeyde korur.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Features;


