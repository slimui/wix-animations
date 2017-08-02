import React from 'react';
import Animator from '../../src/components/Animator';
import * as css from './Example.scss';
import AnimationTemplate from './AnimationTemplate';


const ExampleClasses = ({show}) => {
  return (
    <div>
      <div className={css.basicWrapper}>
        <Animator opacity scale className={css.flexParent} childClassName={css.orange}
                  childStyle={{border: '1px solid blue'}}>
          {show && <div animatorChildClassName={css.flexGrow1} className={css.basicDiv}>We are flex children</div>}
          {show &&
          <div animatorChildClassName={css.flexGrow1} animatorChildStyle={{color: 'red'}} className={css.basicDiv}>We
            have flex-grow:1, I have red inline style</div>}
          {show &&
          <div animatorChildClassName={`${css.flexGrow1} ${css.flexGrow4}`} className={css.basicDiv}>except me, I have
            flex-grow: 10</div>}
        </Animator>
      </div>
      <div style={{fontSize: '18px', lineHeight: '24px'}}>
        Pay attentions that the data of animatorChildClassName and animatorChildStyle will be placed on the top level of
        the
        Animation
        Children and it is designated to interact with the Animator's className prop (for flex and maybe other
        purposes).
        These classes will not be included in the animation and they must be used carefully. For your content's
        design
        use regular className on YOUR div or inside your custom component
      </div>
    </div>
  )
};

export default () =>
  <AnimationTemplate>
    <ExampleClasses/>
  </AnimationTemplate>
