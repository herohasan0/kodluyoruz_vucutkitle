import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  border: 5px solid #000;
  padding: 20px;
  width: 50%;
  margin: 0;
  margin-right: 20px;
  margin-left: 20px;
`;

function Description({ props }) {
  return (
    <Div>
      Obezite hesaplamada kilonuzun, boy değerinizin karesine bölünmesiyle
      (kg/m²) hesaplanan Vücut Kitle İndeksi (VKİ) değeri kullanılır ve Dünya
      Sağlık Örgütü'nün referans aralığı temel alınır. Vücut kitle indeksi
      sonuçlarına göre 30’un üzeri obez, 40’un üzeri morbid obez, 50’nin üzeri
      süper obez olarak isimlendirilir. Detaylı vücut kitle indeksi ile obezite
      hesaplamada ise, yaşınız ve cinsiyetiniz de dikkate alınarak kilonuzun,
      vücut yağ yüzdenizin ve bel çevrenizin normal değerlerde olup olmadığını
      öğrenebilirsiniz. Vücut kitle indeksi değeriniz zayıf, fazla kilolu, obez
      ya da morbid obez ise kilo vermek için uzmanların önerilerini yerine
      getirerek zayıflayabilirsiniz. Obezite, en basit şekilde; sağlığı bozacak
      ölçüde vücutta anormal ve aşırı yağ birikmesidir. Ayrıca yetişkin
      kadınlarda vücut ağırlığının, olması gerekenden ortalama yüzde 30,
      erkeklerde ise yüzde 25 fazla olması da obezite olarak ifade edilebilir.
      Obeziteyi hesaplamak için tüm dünyada Vücut kitle indeksi (VKİ)
      hesaplaması kullanılır. VKİ değeriniz kilogram olarak ağırlığınızın, metre
      cinsinden boy uzunluğunun karesine bölünmesiyle (kg/m²) elde edilir. Boy
      ve kilo bilgilerinizi VKİ hesaplayıcıya girerek obezite
      sınıflandırılmasına göre kilonuzun normal değerlerde olup olmadığını
      öğrenebilirsiniz. Eğer değerleriniz normalin altında ya da üstündeyse,
      diyetisyen ya da hekiminiz başka ek tetkikler de isteyerek (kas yoğunluğu
      ölçümü, kan değerleri vb.) size uygun tedaviyi belirleyecektir.
    </Div>
  );
}

export default Description;
