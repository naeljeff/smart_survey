import {Text, View, Image} from 'react-native';
import React from 'react';
import HomepageBodyMenu from '../molecules/body/HomepageBodyMenu';

const HomepageBody = () => {
  return (
    <View className="w-full h-full bg-white rounded-t-2xl">
      {/* Banner */}
      <View className="w-full h-1/6">
        <Image
          source={require('../../../../assets/baground1.png')}
          className="w-full h-full rounded-t-2xl"
          style={{
            resizeMode: 'stretch',
          }}
        />
      </View>

      {/* Content */}
      <View className='w-full h-1/6'>
        <HomepageBodyMenu />
      </View>

      {/* Carousel */}
      <View className='w-full h-4/6 bg-blue-500'>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, vero. Vitae, ad? Dolorum numquam ad labore voluptatibus expedita corporis impedit repellat, autem eligendi provident, officiis recusandae, accusantium sequi sapiente. Non dignissimos ullam explicabo. Consequuntur odio sapiente quidem fuga adipisci pariatur. Numquam sint quod commodi odit esse, ipsum odio excepturi vel provident suscipit labore eveniet voluptas facere temporibus autem deleniti, reprehenderit fugit inventore quaerat blanditiis fuga consectetur. Voluptate harum molestiae vel sit sint tempora dignissimos voluptates in unde similique, facilis officia delectus consequuntur hic atque cum magnam minima debitis nam qui quo reiciendis ullam. Adipisci et nemo tenetur? Eveniet voluptatem maxime quasi ipsa at iste numquam nemo magnam vitae, vel nulla. Debitis, rem praesentium! Modi facilis laudantium praesentium corrupti obcaecati ipsam eaque quo, magnam incidunt, ipsa tenetur delectus beatae molestias accusantium ut? Quos dicta eum corporis saepe a totam, iure labore eveniet, ducimus libero repellat nihil recusandae vero voluptatibus temporibus, nemo non illum vitae deleniti? Quod sed maxime eum exercitationem deserunt consequuntur molestiae, ipsum modi. Maiores quia harum sapiente, eum natus iste quasi, ab expedita culpa ipsa possimus reprehenderit. Autem alias repudiandae eveniet error quidem quam quas facere ab repellat. Nulla, qui dolor ullam adipisci minus praesentium esse est labore illo.</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, vero. Vitae, ad? Dolorum numquam ad labore voluptatibus expedita corporis impedit repellat, autem eligendi provident, officiis recusandae, accusantium sequi sapiente. Non dignissimos ullam explicabo. Consequuntur odio sapiente quidem fuga adipisci pariatur. Numquam sint quod commodi odit esse, ipsum odio excepturi vel provident suscipit labore eveniet voluptas facere temporibus autem deleniti, reprehenderit fugit inventore quaerat blanditiis fuga consectetur. Voluptate harum molestiae vel sit sint tempora dignissimos voluptates in unde similique, facilis officia delectus consequuntur hic atque cum magnam minima debitis nam qui quo reiciendis ullam. Adipisci et nemo tenetur? Eveniet voluptatem maxime quasi ipsa at iste numquam nemo magnam vitae, vel nulla. Debitis, rem praesentium! Modi facilis laudantium praesentium corrupti obcaecati ipsam eaque quo, magnam incidunt, ipsa tenetur delectus beatae molestias accusantium ut? Quos dicta eum corporis saepe a totam, iure labore eveniet, ducimus libero repellat nihil recusandae vero voluptatibus temporibus, nemo non illum vitae deleniti? Quod sed maxime eum exercitationem deserunt consequuntur molestiae, ipsum modi. Maiores quia harum sapiente, eum natus iste quasi, ab expedita culpa ipsa possimus reprehenderit. Autem alias repudiandae eveniet error quidem quam quas facere ab repellat. Nulla, qui dolor ullam adipisci minus praesentium esse est labore illo.</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, vero. Vitae, ad? Dolorum numquam ad labore voluptatibus expedita corporis impedit repellat, autem eligendi provident, officiis recusandae, accusantium sequi sapiente. Non dignissimos ullam explicabo. Consequuntur odio sapiente quidem fuga adipisci pariatur. Numquam sint quod commodi odit esse, ipsum odio excepturi vel provident suscipit labore eveniet voluptas facere temporibus autem deleniti, reprehenderit fugit inventore quaerat blanditiis fuga consectetur. Voluptate harum molestiae vel sit sint tempora dignissimos voluptates in unde similique, facilis officia delectus consequuntur hic atque cum magnam minima debitis nam qui quo reiciendis ullam. Adipisci et nemo tenetur? Eveniet voluptatem maxime quasi ipsa at iste numquam nemo magnam vitae, vel nulla. Debitis, rem praesentium! Modi facilis laudantium praesentium corrupti obcaecati ipsam eaque quo, magnam incidunt, ipsa tenetur delectus beatae molestias accusantium ut? Quos dicta eum corporis saepe a totam, iure labore eveniet, ducimus libero repellat nihil recusandae vero voluptatibus temporibus, nemo non illum vitae deleniti? Quod sed maxime eum exercitationem deserunt consequuntur molestiae, ipsum modi. Maiores quia harum sapiente, eum natus iste quasi, ab expedita culpa ipsa possimus reprehenderit. Autem alias repudiandae eveniet error quidem quam quas facere ab repellat. Nulla, qui dolor ullam adipisci minus praesentium esse est labore illo.</Text>
      </View>
    </View>
  );
};

export default HomepageBody;
