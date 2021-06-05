import React from 'react';
import styled from 'styled-components';
import Box from './Box';

const Desc = styled.div`
  font-size: 18px;
  line-height: 30px;
`;

function Description({ props }) {
  return (
    <Box>
      <Desc>
        Obezite hesaplamada kilonuzun, boy değerinizin karesine bölünmesiyle
        (kg/m²) hesaplanan Vücut Kitle İndeksi (VKİ) değeri kullanılır ve Dünya
        Sağlık Örgütü'nün referans aralığı temel alınır. Vücut kitle indeksi
        sonuçlarına göre 30’un üzeri obez, 40’un üzeri morbid obez, 50’nin üzeri
        süper obez olarak isimlendirilir. Eğer değerleriniz normalin altında ya
        da üstündeyse, diyetisyen ya da hekiminiz başka ek tetkikler de
        isteyerek (kas yoğunluğu ölçümü, kan değerleri vb.) size uygun tedaviyi
        belirleyecektir.
      </Desc>
    </Box>
  );
}

export default Description;
