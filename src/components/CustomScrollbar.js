import React from 'react';
import styled from 'styled-components';

export default function CustomScrollbar({ scrollWidth, scrollRadius, scrollColor, scrollBackgroundColor }) {
  return (
    <Container
      id="customScrollbar"
      scrollWidth={scrollWidth}
      scrollRadius={scrollRadius}
      scrollColor={scrollColor}
      scrollBackgroundColor={scrollBackgroundColor}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at lorem est. Fusce molestie, velit quis bibendum
      molestie, felis diam auctor lorem, nec ullamcorper diam lectus ac tortor. Nam sed justo risus. In egestas, justo
      sit amet consequat gravida, leo metus viverra urna, non semper dolor enim vitae lacus. Maecenas tempor augue
      suscipit elit maximus, et interdum tortor ullamcorper. Phasellus posuere lobortis semper. Aliquam urna velit,
      pharetra at fermentum vitae, sollicitudin vitae turpis. Nunc porta pharetra erat, sit amet tincidunt libero semper
      et. Mauris id augue vestibulum ex pulvinar dapibus placerat vel nibh. Aliquam ac pulvinar nisi, eu varius nisl.
      Nullam arcu risus, egestas ultrices diam ut, vestibulum ultrices sapien. Etiam sollicitudin leo auctor, tempor
      nunc vel, dapibus elit. In consequat at tellus consequat semper. Suspendisse vehicula pellentesque massa, vitae
      vestibulum enim dignissim quis. Aliquam eget vehicula mi, sed elementum est. Cras eleifend sem ut sem aliquet
      sagittis. Nunc eget nisl ante. Donec ac turpis eleifend, venenatis enim ut, finibus dui. Fusce commodo nisl sed
      elementum commodo. Maecenas odio arcu, sagittis id venenatis vitae, vulputate sit amet ipsum. Nullam maximus ipsum
      augue, sagittis bibendum quam vulputate non. Vestibulum rutrum libero vel metus egestas accumsan. Fusce lorem
      odio, ultrices sit amet libero at, semper consequat sapien. Nulla hendrerit tellus ut varius rutrum. Quisque
      pretium urna eget egestas efficitur. Sed bibendum dolor vitae augue ullamcorper, eget malesuada odio mattis.
      Aenean mattis nunc eu purus ultrices, nec faucibus sapien mollis. Nullam molestie ullamcorper turpis id laoreet.
      Vivamus facilisis nunc eget urna scelerisque faucibus. Nulla facilisi. Vestibulum ullamcorper dui felis, sit amet
      hendrerit felis hendrerit ut. Nunc ac ipsum a sem hendrerit tempor. Integer vel imperdiet purus. Vivamus dolor
      eros, maximus a cursus blandit, condimentum in justo. Phasellus id mi ullamcorper, tristique nisi ac, feugiat
      magna. Integer finibus gravida diam, id lobortis tortor gravida eu. Etiam felis quam, dignissim lobortis erat at,
      tincidunt lacinia nulla. Proin ullamcorper odio quis lectus accumsan bibendum. Donec cursus sapien magna, ac
      tincidunt ipsum accumsan ut. Sed elit ex, porttitor et tellus consectetur, lobortis congue dolor. Proin in congue
      diam. Nam rutrum felis at viverra dignissim. Nunc luctus, est sit amet tempor consequat, orci lorem posuere ipsum,
      sit amet dapibus erat dui non lacus. Mauris consequat eleifend ligula vitae ullamcorper. Pellentesque imperdiet
      vestibulum nisl, sit amet ultrices velit consectetur vitae. Aliquam semper eget felis vulputate tempor. Aenean
      elementum molestie turpis, id accumsan erat blandit nec. Curabitur elementum, mi sit amet venenatis facilisis,
      arcu odio convallis arcu, bibendum lobortis orci nisl quis est. Sed ultrices fermentum enim sit amet euismod. Cras
      convallis commodo eros, sit amet ullamcorper augue ultricies quis. In iaculis lectus vel mollis ullamcorper.
      Quisque suscipit tincidunt mauris eu ullamcorper. Suspendisse eu accumsan purus. Sed condimentum aliquam nisi, id
      ullamcorper mi vulputate at. Vivamus maximus nisi facilisis porta accumsan. Vestibulum nisl nisl, mollis vitae
      dictum pulvinar, laoreet eu tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at lorem est.
      Fusce molestie, velit quis bibendum molestie, felis diam auctor lorem, nec ullamcorper diam lectus ac tortor. Nam
      sed justo risus. In egestas, justo sit amet consequat gravida, leo metus viverra urna, non semper dolor enim vitae
      lacus. Maecenas tempor augue suscipit elit maximus, et interdum tortor ullamcorper. Phasellus posuere lobortis
      semper. Aliquam urna velit, pharetra at fermentum vitae, sollicitudin vitae turpis. Nunc porta pharetra erat, sit
      amet tincidunt libero semper et. Mauris id augue vestibulum ex pulvinar dapibus placerat vel nibh. Aliquam ac
      pulvinar nisi, eu varius nisl. Nullam arcu risus, egestas ultrices diam ut, vestibulum ultrices sapien. Etiam
      sollicitudin leo auctor, tempor nunc vel, dapibus elit. In consequat at tellus consequat semper. Suspendisse
      vehicula pellentesque massa, vitae vestibulum enim dignissim quis. Aliquam eget vehicula mi, sed elementum est.
      Cras eleifend sem ut sem aliquet sagittis. Nunc eget nisl ante. Donec ac turpis eleifend, venenatis enim ut,
      finibus dui. Fusce commodo nisl sed elementum commodo. Maecenas odio arcu, sagittis id venenatis vitae, vulputate
      sit amet ipsum. Nullam maximus ipsum augue, sagittis bibendum quam vulputate non. Vestibulum rutrum libero vel
      metus egestas accumsan. Fusce lorem odio, ultrices sit amet libero at, semper consequat sapien. Nulla hendrerit
      tellus ut varius rutrum. Quisque pretium urna eget egestas efficitur. Sed bibendum dolor vitae augue ullamcorper,
      eget malesuada odio mattis. Aenean mattis nunc eu purus ultrices, nec faucibus sapien mollis. Nullam molestie
      ullamcorper turpis id laoreet. Vivamus facilisis nunc eget urna scelerisque faucibus. Nulla facilisi. Vestibulum
      ullamcorper dui felis, sit amet hendrerit felis hendrerit ut. Nunc ac ipsum a sem hendrerit tempor. Integer vel
      imperdiet purus. Vivamus dolor eros, maximus a cursus blandit, condimentum in justo. Phasellus id mi ullamcorper,
      tristique nisi ac, feugiat magna. Integer finibus gravida diam, id lobortis tortor gravida eu. Etiam felis quam,
      dignissim lobortis erat at, tincidunt lacinia nulla. Proin ullamcorper odio quis lectus accumsan bibendum. Donec
      cursus sapien magna, ac tincidunt ipsum accumsan ut. Sed elit ex, porttitor et tellus consectetur, lobortis congue
      dolor. Proin in congue diam. Nam rutrum felis at viverra dignissim. Nunc luctus, est sit amet tempor consequat,
      orci lorem posuere ipsum, sit amet dapibus erat dui non lacus. Mauris consequat eleifend ligula vitae ullamcorper.
      Pellentesque imperdiet vestibulum nisl, sit amet ultrices velit consectetur vitae. Aliquam semper eget felis
      vulputate tempor. Aenean elementum molestie turpis, id accumsan erat blandit nec. Curabitur elementum, mi sit amet
      venenatis facilisis, arcu odio convallis arcu, bibendum lobortis orci nisl quis est. Sed ultrices fermentum enim
      sit amet euismod. Cras convallis commodo eros, sit amet ullamcorper augue ultricies quis. In iaculis lectus vel
      mollis ullamcorper. Quisque suscipit tincidunt mauris eu ullamcorper. Suspendisse eu accumsan purus. Sed
      condimentum aliquam nisi, id ullamcorper mi vulputate at. Vivamus maximus nisi facilisis porta accumsan.
      Vestibulum nisl nisl, mollis vitae dictum pulvinar, laoreet eu tellus.
    </Container>
  );
}

const Container = styled.div`
  color: #fff;
  font-size: 1.5rem;
  padding: 2rem;
  /* 높이를 지정해줘야 스크롤이 생김 */
  height: 100vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: ${(props) => props.scrollWidth};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.scrollColor};
    border-radius: ${(props) => props.scrollRadius};
  }

  ::-webkit-scrollbar-track {
    border-radius: ${(props) => props.scrollRadius};
    background: ${(props) => props.scrollBackgroundColor};
  }
`;
