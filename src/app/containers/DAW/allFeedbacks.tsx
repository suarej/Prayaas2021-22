import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SectionContainer = styled.div`
  ${tw`
flex
flex-col
items-center
justify-center
`}
`;

const Title = styled.h1`
  ${tw`
        text-center
        text-black
        text-xl
        mt-6
        mb-8
        md:text-2xl
        font-medium
        md:font-black
        md:leading-normal
    `};
`;

const ListContainer = styled.ul`
  ${tw`
            flex
            flex-col
            mb-7
            list-decimal
            list-inside
            
        `};
`;

const ListItem = styled.li`
  ${tw`
        // mb-3
    `};
`;

const GeneralTextContainer = styled.li`
  ${tw`
        text-base
        list-none
        mb-5
        tracking-wide
        font-semibold
    `};
`;

const ReqNotReqContainer = styled.li`
  ${tw`
        text-base
        text-red-500
        list-none
        mb-5
        tracking-wide
        font-semibold
    `};
`;

export function FeedbackDayOne() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem>
          Dont give obvious start. Try to draw broader picture and context of
          the question in the beginning.
        </ListItem>
        <ListItem>
          Provide updated data. Most of you were providing 2011 census data
          which is almost 10 years old. Refer the data published by NITI AAYOG,
          NFHS-4/5 etc.
        </ListItem>
        <ListItem>
          Read question carefully. Question asks to write reasons for adverse
          sex ratio on prosperous states. Dont write general causes for low sex
          ratio. Stick to the demand of the question.
        </ListItem>
        <ListItem>
          Read the instructive word of the question. Here it is “Give
          Arguments”. Don’t just list them down. Elaborate each point in 20-25
          words
        </ListItem>
        <ListItem>
          Give a proper optimistic conclusion as per the requirement of the
          question.
        </ListItem>
        <ListItem>
          Include examples, case studies, diagrams, maps, charts etc. in your
          answer.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDayTwo() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem>
          While writing data regarding social aspects, try to provide Indian
          sources. Data from international sources like FAO for feminisation of
          agriculture sound very distant one. Indian organisations can measure
          ground reality accurately.
        </ListItem>
        <ListItem>
          Many of you have mentioned data which shows families headed by women.
          But it is not the requirement of the question. Mention data related to
          feminisation of agriculture only.
        </ListItem>
        <ListItem>
          Migration and poverty have direct relation with the economic aspect.
          Dont categorised them into socio-cultural aspects.
        </ListItem>
        <ListItem>
          Updated aspects like COVID-19 can be added to your answer.
        </ListItem>
        <ListItem>
          Dont write unnecessary information like problems faced by women due to
          feminisation of agriculture
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDayThree() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was trickier one. After reading the question in the
        first instance it sounds very easy one. But once you start writing the
        answer many of you might have faced the mental blockade. Welcome to UPSC
        guys!!! <br /> Unfortunately not a single answer met all the
        requirements of the question. Above posted answers are somewhat closer
        to comprehensive answer. <br />
        While attempting core society based questions, content is never a
        problem for the candidate. Almost everyone had enough content to write
        an answer which can fetch good marks. The key lies in the structuring
        part. <br /> Use of proper headings and subheadings play deciding factor
        in such question. So I’ll suggest you to take some time to frame a
        structure for your answers before writing them down. You can use the
        following structure for this question:- <br />
        Here is some more afterthought : <br />
        You can simply mention that, in older times joint families were
        preferred as economics of family used to revolve around the agriculture
        and agriculture needs labours and has less mobility and hence there were
        emphasis on having joint family. But with changing time dependence of
        agriculture is rapidly declining. Job mobility through transfers has
        increase and this changed economic scenario has led to the end of life
        cycle of joint family.
        <br /> While giving conclusion, you can say that:- Though economics has
        compelled us to shift towards nuclear families we still cherish the
        ethos of joint family due to our social values. For example, we still
        have occasional get togethers during festivals, marriages and other
        family events. We are always in touch with our family members through
        technology. In short roots of joint family system are still there, they
        have changed from conventional to virtual ones.
      </GeneralTextContainer>
      <ListContainer>
        <ListItem>
          Economic factors determining the life cycle of Joint family (dont just
          list them down, DISCUSS them) 50-60 words
        </ListItem>
        <ListItem>
          Social factors determining the life cycle of joint family (restrict it
          to 20-30 words
        </ListItem>
        <ListItem>
          State the reason why economic factors outweigh social factors ( This
          is the most important link in this question and is missing in all
          answer) 15-25 words
        </ListItem>
        <ListItem>Conclude accordingly 20-30 words</ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDayFour() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem>
          Still many of you are starting your answer with the definition of
          poverty or population. Avoid it.
        </ListItem>
        <ListItem>
          Dont write causes of poverty and population growth. It is not asked.
          Link between poverty and population is asked in the question.
        </ListItem>
        <ListItem>
          Dont write unnecessary information regarding causes and solutions to
          the poverty and population growth.
        </ListItem>
        <ListItem>
          Most of you have done the examine part well. But only 4 copies have
          understood the meaning of Critically.
        </ListItem>
        <ListItem>
          There is difference between ‘criticism’ and ‘critically’
        </ListItem>
        <ListItem>
          You can add flow chart, map to this question to get more marks. But
          very few of you have done that.
        </ListItem>
        <ListItem>Critically means give your opinion.</ListItem>
        <ListItem>
          Giving opinion does not mean to find the balance. You need to take a
          stand.
        </ListItem>
        <ListItem>
          Never give way forward, solution type conclusion to this type of
          question. Your opinion should be your conclusion.
        </ListItem>
        <ListItem>
          If you are not agreeing with the statement in the question then also
          it is fine with Critically type of question. Just you need to give
          satisfactory explanation.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDayFive() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem>
          Give detailed elaborative explanation. It involves the the component
          of HOW and WHAT along with suitable examples.
        </ListItem>
        <ListItem>
          For example, in this question DESCRIBE Cultural elements which means
          HOW cultural elements bring on the diversity in India and give their
          examples.
        </ListItem>
        <ListItem>
          No need to go for positive/negative aspect of it. Keep it simple.
        </ListItem>
        <ListItem>
          Describe is the simplest directive word which required you tell the
          things without giving your opinion or criticism.
        </ListItem>
        <ListItem>
          RATE THE SIGNIFICANCE is the most crucial part of this question. It
          means you have to rate/rank the cultural elements in forging national
          identity.
        </ListItem>
        <ListItem>
          Its like you rate the product on Amazon. If you like the product you
          rate it more. Similarly if you think any particular aspect is more
          important over another rate it accordingly. But this does not mean
          that you should give ratings like 9/10 or 2/10.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDaySix() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem>
          We always study economy from prelims point of view and never pay
          attention the writing aspect of it. This brings casual, vague and
          non-formal approach in our writing.
        </ListItem>
        <ListItem>
          Every subject of UPSC has separate demand and we need to understand
          that demand. Economy answers demand technical words in your answers
          along with latest data/facts. If you can bring in some graphs and
          charts as mentioned in Economic Survey then its always the best thing
          to do.
        </ListItem>
        <ListItem>
          Whenever UPSC asks direct question like “What is the meaning”, always
          start with the definition. And then provide data. These type of
          questions are the simplest one to answer.
        </ListItem>
        <ListItem>
          Question was divided into two halves. First half requires you to write
          about tax expenditure. Almost everyone has written well here. But dont
          just stop at the definition. As it is the half prt of the question,
          you need to write atleast 60-70 words about it.
        </ListItem>
        <ListItem>
          Second half is the most crucial part which demands you to write about
          how tax expenditure in housing sector impacts budgetary policies. Here
          you dont have to mention housing policies only. You need to throw
          light on some other budget sectors like investment, lending
          strategies, revenue expenditure etc.
        </ListItem>
        <ListItem>
          Provide conclusion in which you should not be criticising the
          tex-expenditure. It is for good only. You need to provide a solution
          in such way that your social sectors should get benefits without
          affecting the government tax revenues.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay7() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem>
          While giving start to this question try to incorporate unemployment
          and growth related data simultaneously. Many of you are just giving
          one data and missing another. Context should be developed at the start
          with respect to both.
        </ListItem>
        <ListItem>
          Main body should contain status of joblessness in India and then
          reasons for joblessness. Many of you are just writing data on
          joblessness and have missed the second part.
        </ListItem>
        <ListItem>
          Reasons for jobless growth is the most important aspect of this
          question. Those who have written the reasons, many of them have failed
          to elaborate them.
        </ListItem>
        <ListItem>
          Instruction word here is ARGUE. Dont just list down the reasons, argue
          them. Argument means give statements, data, facts in support or in
          oppose of it. But here Jobless growth is the reality and its a
          absolute truth. So dont give opposing arguments to reality/absolute
          truths.
        </ListItem>
        <ListItem>
          Whenever you write any issue/problem in your answer always provide
          solution to it. Remember that we are going to be politicians whose job
          is to find flaws. We are going to be future bureaucrats and our job is
          going to give solution to problems. Thus, always give solution in the
          end if you see a problem.
        </ListItem>
        <ListItem>
          Question is DO YOU AGREE? Dont start with YES I AGREE. It gives very
          wrong impression. Generally we are supposed to make our opinions after
          deep analysis. Before analysing things if you are giving your opinion
          in the beginning itself, then it shows prejudiced mind of the a
          candidate. And UPSC looks for impartial minds. Such questions are
          there to judge your personality and thought process.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay8() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was asking you to give your opinion whether India can
        become a developed country without strong industrial base. We all know
        that we cannot become a developed nation unless we have strong
        foundations. <br /> But while writing answer you should give your
        opinion in a much milder way. Don’t say directly that NO, India cannot
        be a developed nation without industrial base. <br />
        Try to explore both the sides. There are nations who are developed
        without having strong industrial base, like Singapore, Switzerland. So
        you can mention in your conclusion that India can develop as we have
        seen other countries do. But these countries are comparatively smaller
        and are socio-economically homogenous. Hence development without
        industrial base can survive there. And looking at the India’s
        socio-economic landscape, to sustain the development, we need strong
        Industrial base. <br /> Always try to bring optimism and sense of
        non-extreme views in your conclusions. Many of you have missed this part
        and hence have lost one mark.
      </GeneralTextContainer>
    </SectionContainer>
  );
}

export function FeedbackDay9() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ListContainer>
        <ListItem>
          Start the answer by giving greater context around the question.
        </ListItem>
        <ListItem>
          Your answer should be clearly divided into requirements and status of
          gender budgeting in India. Give equal weightage to both parts.
        </ListItem>
        <ListItem>
          Maintain the flow of the question in your answer, that is first
          mention requirements and then go for status. Generally flow of the
          questions should be followed.
        </ListItem>
        <ListItem>
          Many of you are facing the dilemma whether to write requirements or
          needs of gender budgeting. In exam also you will face such dilemmas.
          So rather than skipping this part, you can smartly use the heading
          like “Needs and requirements of gender budgeting in India”. Be smart.
        </ListItem>
        <ListItem>
          Always give full heading, don’t just write Needs, Requirements or
          Status
        </ListItem>
        <ListItem>
          After mentioning the status of gender budgeting throw some light on
          drawbacks and lacuna of gender budgeting in India. Or you can
          simultaneously provide data and find drawbacks of gender budgeting
          process.
        </ListItem>
        <ListItem>Don’t go into the details of factual data of budget</ListItem>
        <ListItem>Conclude accordingly with optimistic vision</ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay10() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ReqNotReqContainer>What was not required ?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Dont give definitions of protectionism, currency manipulation and
          macroeconomic stability
        </ListItem>
        <ListItem>
          Dont explain the protectionist and currency manipulative policies
          separately. Mention those policies while explaining their impact on
          Macroeconomic stability of India.
        </ListItem>
        <ListItem>
          Dont mention why these policy decisions are taken by countries.
        </ListItem>
        <ListItem>
          Dont give your opinion about these policies in the beginning. Show
          their impact on India and then only give your opinion after detail
          analysis.
        </ListItem>
        <ListItem>
          Focus on MACROECONOMIC stability of India. Dont write general impacts
          on India. It wont give you any marks.
        </ListItem>
        <ListItem>
          Whenever you are talking about impacts, mention postitive impacts
          first.
        </ListItem>
        <ListItem>
          Question is about other countries’ policies on India and not on
          India’s protectionist policies on India.
        </ListItem>
        <ListItem>
          Dont entirely focus on China and USA. Give diversified examples like
          BREXIT, RCEP, multilateral to bilateral shift, failure of WTO etc.
        </ListItem>
      </ListContainer>

      <ReqNotReqContainer>What should be the approach ?</ReqNotReqContainer>

      <ListContainer>
        <ListItem>
          Start with giving the greater context around the question, which is
          anti-globalisation wave and trade wars.
        </ListItem>
        <ListItem>
          In main body, mention positive and negative impacts of global
          protectionist and currency manipulative practices on macroeconomic
          stability of India. You can divide impacts into short term-long term
          as well. But not both. (We’ll share model answers. You can get the
          content from there).
        </ListItem>
        <ListItem>
          Dont go on listing the impacts. Explain those impacts. UPSC never
          gives mark for big lists. Reduce you points to 4/5 but give quality
          and to the point precise explanation.
        </ListItem>
        <ListItem>
          Conclude accordingly as per you analysis. Generally these policies are
          harmful for India in longer run. So in conclusion mention how are we
          going to face it. Schemes like Atmanirbhar Bharat are right steps in
          right direction.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay11() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <ReqNotReqContainer>What was not required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>No need to define pink revolution. </ListItem>
        <ListItem>
          No need to mention any other revolutions unnecessarily. 10 markers
          require precise and crisp use of words. So dont waste your words in
          mentioning green and white revolution.
        </ListItem>
        <ListItem>No need to explain about food industry.</ListItem>
        <ListItem>
          No need to explain positive and negatives of pink revolution.
        </ListItem>
      </ListContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>

      <ListContainer>
        <ListItem>
          Start the answer with the context around the question. In this
          question context was revolving around nutrition and health. So your
          start should link nutrition and health to pink revolution.
        </ListItem>
        <ListItem>
          Pink revolution has multiple meanings. Here it was related to meat
          revolution. (In case if you cannot figure it out then use your common
          sense. Pink revolution can be used for onion also but how the health
          and nutritional status of the country will be improved by eating just
          onions. Make intelligent guesses guys. Nobody knows everything, you
          have to make intelligent guesses in the final examination as well)
        </ListItem>
        <ListItem>
          CRITICALLY does not mean positive and negative all the time. It means
          give your opinion. It should be read with appending instruction word,
          which was elucidate here. The meaning of elucidate is to explain.
        </ListItem>
        <ListItem>
          Hence, in the main body you need to explain the status of pink
          revolution and its role in improving nutrition and health.
        </ListItem>
        <ListItem>
          This means your main body should contain Benefits, challenges and
          solution related to pink revolution. While mentioning benefits, you
          need to keep on linking nutrition and health with pink revolution.
        </ListItem>
        <ListItem>
          Now the main question arises how to fit in all these three sections
          into 150 words. And that is the skill. In such cases, cover one part
          as illustration and for rest of the parts give elaboration. (We’ll
          share model answer.)
        </ListItem>
        <ListItem>
          In the conclusion you need to give your opinion this means that you
          need to simply say that, Yes pink revolution is a promising thing but
          lot of lacunae are there in its implementation and to overcome those
          lacuna government need to take concrete measures and mention some
          measures/ schemes/initiatives accordingly.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay12() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was based on Agricultural Marketing in general and APMC
        in specific.
      </GeneralTextContainer>
      <ReqNotReqContainer>What was not required..??</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Do not start your answer by mentioning that Agriculture is in state
          list and so. Whenever you write GS 3 answer, always keep the context
          within GS 3 itself. Mention of state list here gives impression of GS
          2. Strictly maintain this compartmentalisation.
        </ListItem>
        <ListItem>
          No need to mention significance/characteristics/objectives of APMC. It
          is not the requirement of the question.
        </ListItem>
      </ListContainer>

      <ReqNotReqContainer>What was required..??</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with giving the context around the question, that
          is, issues of agricultural marketing (especially APMC) and its impact.
          Dont just give details of APMC.
        </ListItem>
        <ListItem>
          In main body you need to mention how APMC has impeded the development
          of agriculture and how APMC has caused food inflation. (Dont talk
          about benefits of APMC here, it should came at the end of the main
          body)
        </ListItem>
        <ListItem>
          Divide your main body into two halves, one explaining how APMC has
          impeded agricultural growth and another explaining how APMC has caused
          the inflation.
        </ListItem>
        <ListItem>Question demands you to CRITICALLY EXAMINE.</ListItem>
        <ListItem>
          EXAMINE means, upto what extent statement given in the question are
          true. In this question, in examination part you need to say upto
          certain extent APMC has caused impediments to agricultural development
          and food inflation, but other factors are also responsible for this
          and just list down those factors (dont explain them).
        </ListItem>
        <ListItem>
          Now the most important part comes, that is, CRITICALLY. Critically
          demands you to give your opinion. Give clear cut opinion about role of
          APMCs in developing agriculture. And the general opinion should go
          against the APMC. You can say that, APMCs have certainly impeded the
          development of agriculture and caused food inflation but they are not
          flawed entirely. Certain corrections in their structuring can be a
          harbinger of new era in agricultural marketing.
        </ListItem>
        <ListItem>
          As you have examined as well as given your opinion, you can conclude
          by giving an optimistic solutions.
        </ListItem>
        <ListItem>
          Insertion of present farm bills suitably in your answer can be an
          icing on the cake.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay13() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was open ended and one can write an entire essay about
        E-Technology and its benefit to farmers. Almost everyone of you
        encountered the difficulty in managing your data within 150 words.
        <br />
        Today’s question is an excellent realisation for us that mad quest for
        the content can sometimes back fire. So collect limited but quality
        content, and learn to convert it into marks through answer writing
        practice.
        <br /> Today, rather than going for what was not required, we’ll look
        into what was required part.
      </GeneralTextContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>

      <ListContainer>
        <ListItem>
          Start your answer with precise and to the point context of the
          question. Context of today’s question was agriculture has certain
          problems and digital India can provide solution to those. Dont keep on
          writing about Digital India or agriculture only. You need to link
          both.
        </ListItem>
        <ListItem>
          Question was straight forward one. In main body firstly, it was
          expected from you to write, How Digital India can help farmers in
          improving the farm productivity and farm incomes? Whenever HOW type
          direct questions are asked, dont just enlist the features. You need to
          give bit elaboration as well.
        </ListItem>
        <ListItem>
          While mentioning points, arrange them priority-wise . For example,
          digital technology can help both marketing as well as weather
          forecasting. But in case of agriculture first priority should be given
          to weather forecasting.
        </ListItem>
        <ListItem>
          If you are able to set priorities then it becomes very easy to manage
          the content. You dont need to remember much data in that case. Just
          keep on hitting the basic. (Refer model answer for that)
        </ListItem>
        <ListItem>
          Second part of the main body requires you to write about Government
          steps in this regard. Here question is of WHAT type. In this type you
          just need to enlist the features. Dont elaborate them.
        </ListItem>
        <ListItem>
          Such open ended questions are comparatively easier to attempt and
          almost everyone writes these question in final exam. In this case,
          your marks will be decided on your content. More points you
          accommodate in your answer, more marks you’ll get.
        </ListItem>
        <ListItem>
          In conclusion part, dont repeat the solution/government measures part
          again, as you have already mentioned them in main body. Repetition
          must be avoided.
        </ListItem>
        <ListItem>
          You can conclude that, Digital India has great potential in
          transforming the rural agricultural landscape in India but it faces
          certain hurdles while realising its full potential. If we overcome
          these hurdles successfully then Digital India can definitely bring a
          new dawn in the field of farm productivity and farm incomes. (Mention
          2-3 basic issues of Digital India like digital divide, lack of access,
          lack of awareness etc)
        </ListItem>
        <ListItem>
          Don’t mention points like data safety, net neutrality etc. These
          points are important but at ground level agriculture has much more
          fundamental issues to address.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay14() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was straightforward one like yesterday, but it needs
        you to write specific answer. Many of you have hit the approach of the
        question correctly. So rather than going for what was not required part,
        we’ll directly throw light on the requirement of the question
      </GeneralTextContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start directly with the definition of MSP. As we have already
          discussed during tax terrorism question, whenever question start with
          WHAT, always give the definition.
        </ListItem>
        <ListItem>
          For WHAT type questions, come to the point directly. Don’t waste your
          time, space and words in explaining the context of the question.
        </ListItem>
        <ListItem>
          WHAT part of the question must be answered within 40-50 words. Dont
          extend it beyond that.
        </ListItem>
        <ListItem>
          There is no good ready-made definition of MSP available anywhere. In
          such cases, you need to create definition based on your understanding
          and you need to put it in proper words. This is the skill and requires
          lot of practice.
        </ListItem>
        <ListItem>
          Read the question carefully guys. UPSC never use this words while
          framing questions just like that. Many of you have missed the track of
          Low Income Trap
        </ListItem>
        <ListItem>
          Definitely question is not asking you to write about low income trap
          but you need to link how benefits of MSP help in rescuing farmers from
          this trap. Hence just mentioning the benefits of MSP will not give you
          any marks.
        </ListItem>
        <ListItem>
          Some of you have tried to explain this aspect but have failed to give
          proper explanation regarding trap. Trap is the situation from which
          person cannot escape. And you need to throw some light on this aspect.
        </ListItem>
        <ListItem>
          Whenever UPSC ask direct questions like WHAT and HOW, generally don’t
          go against the statements given in the question. In short, in main
          body you have to support the statement that MSP is helpful in rescuing
          farmers from low income trap.
        </ListItem>
        <ListItem>
          In conclusion part, you need to balance the view by stating that MSP
          is definitely a good step towards welfare of the farmers but it has
          certain lacuna and drawbacks (mention few of those) and give solutions
          accordingly. This part should not go beyond 35 to 45 words.
        </ListItem>
        <ListItem>
          If you can add any current happenings, data, committee reports, it’ll
          definitely fetch good marks.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay15() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was based on livestock resources. It was a 15 marker
        question which means you need to elaborate certain aspects of the
        question to match the word as well as space limit. Today’s question has
        certain hidden aspects as well. So let’s discuss about today’s question.
      </GeneralTextContainer>
      <ReqNotReqContainer>What was not required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>No need for definition of livestock resources.</ListItem>
        <ListItem>
          No need to trace back the history like, livestock has been an allied
          sector to agriculture since Harappan times. Keep your context
          contemporary.
        </ListItem>
        <ListItem>No need to explain all the benefits of livestock.</ListItem>
        <ListItem>
          No need to separate government measures and other measures. Many of
          you have written government measures under a separate heading and
          solutions to the problems of livestock resources under separate
          headings. Such a writing shows repetition of the same point and we
          need to avoid such a repetition
        </ListItem>
      </ListContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer by creating broader context around the question. In
          this question, the context revolves around disguised unemployment in
          agricultural sector and low incomes in rural economy and livestock
          rearing can provide solution to these problems.
        </ListItem>
        <ListItem>
          While giving start, using data to substantiate your arguments is
          always the best thing to do. Please remember that whenever you use
          data in your answer, always mention the source of it. Otherwise it
          sounds vague.
        </ListItem>
        <ListItem>
          For 15 marker question restrict your start to 30-50 words.
        </ListItem>
        <ListItem>
          Your main body should be divided into potential benefits, challenges
          and measures.
        </ListItem>
        <ListItem>
          While mentioning potential benefits limit your arguments to Non-farm
          employment and incomes in rural areas. Don’t unnecessarily keep on
          exploring the facets like gender equality, social security, disaster
          preparedness etc. You can mention these other benefits through an
          illustration.
        </ListItem>
        <ListItem>
          Challenges part is not asked specifically in the question but it is
          required. Now many of you are confused about when to write challenges
          and when not to write. The simple rule is, whenever UPSC is asking you
          to mention measures you should always be mentioning challenges before
          writing measures or solutions.
        </ListItem>
        <ListItem>
          As challenge part is hidden in the question, you can mention those in
          your answer through illustration.
        </ListItem>
        <ListItem>
          After mentioning challenges go for suitable measures part which should
          include both general as well as specific government measures.
        </ListItem>
        <ListItem>
          In conclusion part, simply summarise your answer and give optimistic
          vision regarding livestock sector and its impact on rural economic
          landscape.
        </ListItem>
        <ListItem>
          Now many of you are worried about when to use illustration and how to
          use it. You can do one thing here, for things which are directly
          mentioned in the question, don’t use illustrations and for things
          which are not directly mentioned in the question, go for
          illustrations.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay16() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was based on food processing industries and supply
        chain management issues. This is the most neglected part of the entire
        GS-3. We don’t find this part in any particular book. It is very
        difficult to get precise material on internet as well. But since 2013,
        UPSC has been continuously asking at least one question on this topic.
        But unfortunately, we are very much used to spoon feeding and our
        preparation completely remains dependent on coaching notes and plethora
        of books. And that’s why many of you have decided not to try this
        question today. It is very painful for us to see that you people are
        participating in this initiative as per your convenience and such
        complacent attitude defeats the very purpose of this initiative. One
        reason may be that we are offering it at free of cost and thats why many
        of you do not care about the sanctity of PRAYAAS. We don’t know how are
        you going to run away from such kind of questions when you actually face
        them in your mains examination. If you are here just to collect model
        answers, then we are sorry to say dear friends, you have not understood
        UPSC at all. Let other’s do their karma and let us do our own. So let’s
        discuss about today’s question,
      </GeneralTextContainer>
      <ReqNotReqContainer>What was not required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Context of the question was revolving around food processing
          industries, its benefits and impediments. Hence do not start your with
          the focus of e-commerce.
        </ListItem>
        <ListItem>
          No need to mention benefits of food processing industry
        </ListItem>
        <ListItem>
          No need to mention benefits of e-commerce in general. Question was
          very specific one and you need to throw light on how e-commerce helps
          food processing industry.
        </ListItem>
        <ListItem>
          No need to elaborate what supply chain is and how it is related to
          food processing industry.
        </ListItem>
      </ListContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the broader context of potential benefits of
          food processing industries and general impediments faced by it.
        </ListItem>
        <ListItem>
          In main body you directly need to mention about impediments. Here no
          need to talk about all the impediments faced by food processing
          industries in India. Just focus on marketing and supply chain
          management impediments.
        </ListItem>
        <ListItem>
          As the first part of the question contains WHAT, you directly need to
          jump to the topic without beating around the bush. WHAT needs specific
          and to the point answer.
        </ListItem>
        <ListItem>
          If there would have been discuss, examine, explain, comment part, then
          it is okay to write advantages of food processing industry in brief.
        </ListItem>
        <ListItem>
          In the next part of the main body, you need to talk about how commerce
          can help in overcoming this bottle neck.
        </ListItem>
        <ListItem>
          As this part starts with CAN, your arguments should be either
          e-commerce can help in overcoming or cannot.
        </ListItem>
        <ListItem>
          Of course, e-commerce can help in overcoming the impediments but you
          need to throw light on both the aspects. In short, you need to throw
          some light on lacuna of e-commerce.
        </ListItem>
        <ListItem>
          In conclusion part, try to summarise your answer and give optimistic
          vision in development of food processing industry in India.
        </ListItem>
        <ListItem>
          Many of you are worried about the word limit. Let us clear one thing
          here, even if you are writing one or two points less, try to cover all
          aspects of the question. Cut short the elaboration of other parts but
          cover all the angles asked in the question. Entire coverage of
          question gives you more marks than just explaining a single angle.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay17() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was based on land reforms, its role in the development
        of agriculture and factors behind its success. Friends, land reform is
        that part of syllabus which we neither read in history nor in geography.
        It is very vast as well. Hence whenever we come across any question
        based on it we find it difficult to answer. Let’s discuss about today’s
        question,
      </GeneralTextContainer>
      <ReqNotReqContainer>What was not required? </ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          No need to trace the history, strictly give post-independence
          reference of land reforms.
        </ListItem>
        <ListItem>
          No need to explain what land reforms are and what are its components.
        </ListItem>
        <ListItem>
          No need to mention benefits of land reforms. Benefits are different
          than role. Benefit is theoretically expected while roles are
          practically experienced.
        </ListItem>
      </ListContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the larger context around land related issues
          of agriculture and its impact on farmers. And mention how land reforms
          can give solution to this.
        </ListItem>
        <ListItem>
          While doing so you can mention some of the motives of land reforms.
          (But don’t exceed the word limit of 30 to 50 words in any case)
        </ListItem>
        <ListItem>
          In Main body, first talk about constructive role played by land
          reforms in agricultural development.
        </ListItem>
        <ListItem>
          As the question asks you to DISCUSS this means that you need to cover
          all the aspects of the issue. In this answer you need to mention one
          or two drawbacks of land reforms and challenges faced in their full
          implementation.
        </ListItem>
        <ListItem>
          In next part of your main body, you need to talk about factors behind
          the success of land reforms. This was the straightforward part of this
          answer.
        </ListItem>
        <ListItem>
          Although it is straightforward one, many of you have found it
          difficult to answer. This is mostly because, during our preparation we
          explore only one angle of the issue.
        </ListItem>
        <ListItem>
          In conclusion part try to give optimistic vision by providing
          solutions which can make land reform successful in India.
        </ListItem>
        <ListItem>
          Many of you have struggled in writing the role of land reforms because
          of huge content available around us. While dealing with such a vast
          content, we suggest you to stick to the basics.
        </ListItem>
        <ListItem>
          The basic of land reform is abolition of intermediaries, tenancy
          reforms, land ceiling, consolidation of farms,cooperative farming and
          Improved land record keeping. Hence while writing answers also, don’t
          think about anything else. Just keep on linking these six basic points
          to the question. For example link abolition of intermediaries to the
          development of agriculture, challenges faced while abolishing the
          intermediaries and how to overcome them.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay18() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was based on liberalisation and its impact on Indian
        companies. The question was straightforward one and didn’t have any
        complicated twists in it. But dealing with second part of the question
        is bit tricky here. Let’s discuss about today’s question,
      </GeneralTextContainer>
      <ReqNotReqContainer>What was not required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Don’t trace the history of liberalisation. Give your start with
          contemporary references.
        </ListItem>
        <ListItem>
          No need to mention in detail about LPG reforms. You can mention them
          but no need to elaborate.
        </ListItem>
        <ListItem>No need for the components of liberalisation</ListItem>
        <ListItem>
          No need to compare today’s situation of Indian companies with pre-LPG
          situation.
        </ListItem>
        <ListItem>
          Don’t elaborate the impact of liberalisation on MNCs. Question
          strictly asks you to focus on Indian companies only.
        </ListItem>
      </ListContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the larger context around the question. And in
          this question context revolves around liberalisation and LPG reforms.
        </ListItem>
        <ListItem>
          First part of main body is very straight forward. Whenever UPSC asks
          about impacts you can either divide your answer into positive and
          negative impacts or short-term and long-term impacts. Choose your
          structure as per your convenience.
        </ListItem>
        <ListItem>
          If you are going for positive and negative impacts, always right
          positive impacts first. It is always good to find out the positivity
          (good things) before negativity (bad things)
        </ListItem>
        <ListItem>
          In second part of the main body, You need to give loud and clear
          opinion of yours.
        </ListItem>
        <ListItem>
          If UPSC is asking CAN type questions, answer should contain both
          angles can be and cannot be. But whenever UPSC is asking ARE Type
          questions you need to give firm one-sided opinion.
        </ListItem>
        <ListItem>
          For example, if somebody asks you the question ‘can you play the role
          of a boy in a drama?’ you can say I can or I cannot. But if someone is
          asking you, ‘are you a boy?’, you have to answer it by choosing either
          side.
        </ListItem>
        <ListItem>
          As long as you are giving proper justification to your stance, you can
          give your opinion in either way in this question. You can either say
          that Indian companies are competing satisfactorily or they are not.
          Just give proper justification to it
        </ListItem>
        <ListItem>
          Conclude your answer as per the stance taken by you. If your stance is
          that Indian companies are not performing satisfactorily, then provide
          optimistic solutions. And if your stance is that Indian companies are
          performing satisfactorily, then provide further steps need to be taken
          to consolidate their present status.
        </ListItem>
        <ListItem>
          There is difference between liberalisation and globalisation guys.
          Please go through the model answers and get your facts correct.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay19() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was based on a very common topic, that is green energy
        and conventional energy. First of all let us clear the thing that there
        is difference between green energy and green energy corridor. You can
        mention about green energy in the beginning but the question was asking
        you to focus on green energy corridor and not just green energy.
        Although question looked straightforward one, we have to cover multiple
        dimensions in it because it has asked to write a NOTE. Whenever UPSC
        asks you to WRITE A NOTE on a particular topic we need to cover multiple
        aspects of the issue. It is similar to that of making note for our
        studying purpose. For example, while studying green energy we prepare
        notes on, what green energy is, how it is produced, where it is
        produced, what are its benefits, what are the challenges/impediments and
        what are the solutions. So in NOTE type questions rather than looking
        for what was not required part, we need to look for what was required
        part.
      </GeneralTextContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the larger context around the question, that
          is, problems of conventional energy and how green energy can provide
          solution to it.
        </ListItem>
        <ListItem>
          While doing so you can provide some data/reports/facts. It will
          decorate your answer nicely.
        </ListItem>
        <ListItem>
          In Main body, first you need to talk about some problems of
          conventional energy. As this is not the context of the question, you
          don’t have to elaborate the problems, as we have discussed earlier,
          whenever we don’t need much elaboration, we can use illustrations to
          represent it.
        </ListItem>
        <ListItem>
          After that go for how Green energy corridor can alleviate the problems
          of conventional energy part. Here you can simply mention benefits of
          green energy corridor over conventional energy.
        </ListItem>
        <ListItem>
          While doing so one thing should be taken care of. You need to provide
          arguments in such a way that the problems which you are mentioning
          above should be addressed through your arguments. For example, if you
          are mentioning the problem of scarcity of resources in conventional
          energy part, you can say green energy is abundantly available and
          hence the scarcity aspect can be taken care of through seamless
          development of green energy corridors and energy grids.
        </ListItem>
        <ListItem>
          At the end of your answer, mention certain issues in harnessing the
          full benefit of green energy corridor. As it is not the core of your
          question, you can use illustration to represent it. No need to give
          elaboration for this part as well.
        </ListItem>
        <ListItem>
          In conclusion end your answer on optimistic note with providing steps
          taken by government towards green energy corridors and suggest
          optimistic vision for future roadmap.
        </ListItem>
        <ListItem>
          In short, your flow should be, problems of conventional energy, how
          green energy corridor can overcome these problems, issues or hurdles
          with green energy corridor and solution to those hurdles.
        </ListItem>
        <ListItem>
          Now it becomes very difficult to manage all these angles in your
          answer and that too within 150 words. As we have mentioned earlier,
          even if you are writing one or two points less it is okay but always
          try to cover all the angles of the question.
        </ListItem>
        <ListItem>
          Complete answer is always better than lopsided and imbalanced one.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay20() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was a straight forward one and was asking you to
        discuss the pros and cons of PPP model. The crucial part of today’s
        question was CRITICALLY DISCUSS. Let’s discuss about today’s question,
      </GeneralTextContainer>
      <ReqNotReqContainer>What was not required</ReqNotReqContainer>
      <ListContainer>
        <ListItem>No need to mention about PPP model.</ListItem>
        <ListItem>
          No need to discuss about various types of PPP models.
        </ListItem>
        <ListItem>
          This question contains leading statement which was, ‘adaptation of PPP
          model for infrastructure development of the country has not been free
          from criticism.’ The main question starts after the statement which is
          critically discuss the pros and cons of the PPP model. Friends,
          whenever UPSC gives leading statement in the question don’t go on
          explaining it. You can mention about that leading statement in the
          start but there was no need to mention it in the main body.
        </ListItem>
        <ListItem>
          In short, no need to mention criticism of PPP model separately.
        </ListItem>
      </ListContainer>
      <ReqNotReqContainer>What was required</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question and
          leading statement. Here the context revolves around PPP and leading
          statement talks about the criticism of the model.
        </ListItem>
        <ListItem>
          So in the start, you can mention the need of PPP model in
          infrastructure and few of its criticisms.
        </ListItem>
        <ListItem>
          Addition of any current happenings in the beginning can always add a
          flavour to your answer. In this answer, you can mention ambitious
          National Infrastructure Pipeline Project. This project requires huge
          funding and PPP is the only viable option available in front of
          government.
        </ListItem>
        <ListItem>
          Main body of this question is the easiest one. In question itself UPSC
          has asked you to discuss the pros and cons of the model.
        </ListItem>
        <ListItem>
          Do not give headings like advantages and disadvantages. Although they
          have similar meanings, but it is always good to use the similar
          wordings as that of the question. So divide your answer into pros and
          cons of PPP model.
        </ListItem>
        <ListItem>
          There are multiple pros and cons. Don’t keep on listing them.
          Generally restrict your points to 5/6. If you have more points in your
          mind then try to merge similar points so that number of points won’t
          go beyond 5/6.
        </ListItem>
        <ListItem>
          Question asks you to CRITICALLY DISCUSS. As we have discussed earlier
          CRITICALLY means you need to give your clear-cut opinion.
        </ListItem>
        <ListItem>
          In this question you need to give your opinion whether adaptation of
          PPP model for infrastructure development is good or bad. Generally PPP
          model is good for infrastructure development but it has certain cons
          and lacunas and we need to overcome those.
        </ListItem>
        <ListItem>
          In conclusion give some solution to overcome those lacunas and cons.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay21() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was an open ended question. It demands you to discuss
        the achievements of India in the field of space science and technology.
        Also, it is asking you to link these achievements to socio economic
        development of the country. This question was a very general one, and
        one can write an entire essay on this particular topic. We often face
        challenges while dealing with such questions, due to lot of content
        availability. Hence, rather than going for what was not required, we
        will look directly into what was required part.
      </GeneralTextContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. In
          this question, you can create the context like, at the time of
          Independence, India had limited reach in space science as compared to
          other countries and from that position, we have leapfrogged and became
          a leading player in the field of space technology through multiple
          missions like SHAKTI-ASAT, GSLV, Chandrayaan, MOM etc.
        </ListItem>
        <ListItem>
          In the main body, first we need to talk about India’s achievements in
          the field of space science and technology. Here friends, do not
          separate space, science and technology. It is a combined thing here,
          and you need to talk about space related stuff only.
        </ListItem>
        <ListItem>
          Many of you, while writing the achievements of India, are simply
          listing down various space missions successfully undertaken by ISRO.
        </ListItem>
        <ListItem>
          Various missions is just one aspect of the achievement. India’s
          achievements are much larger than just launching the space missions.
          Here you need to pay more attention towards understanding the question
          rightly.
        </ListItem>
        <ListItem>
          Achievement is something which is unique in nature. There are many
          countries who have launched multiple missions. In that context,
          launching satellites cannot be attributed to be a great achievement of
          India. Our achievement lies in low-cost missions, large success rate
          and near zero failures, less dependency on other countries, high
          degree of reliability, using PSLV technology to successfully launch
          inter-planetary missions etc.
        </ListItem>
        <ListItem>
          This is the unique demand of this question. If you have just mentioned
          India’s missions, automatically you might have received the feedback
          that, your answer lacked depth and you need to do more brainstorming.
          Unfortunately, 99% of answers received today are lacking this aspect.
        </ListItem>
        <ListItem>
          Next part of the main body is comparatively an easier one. Here, you
          need to link the benefits of space technology to socio economic
          development of India. While writing this, you need to bring precision
          and specificity. For example, don’t just mention it will help
          agriculture. Rather you can write, space initiatives like BHUVAN,
          NADAMS, FASAL etc. can help in developing agriculture.
        </ListItem>
        <ListItem>
          In conclusion part of your answer, mention some of the challenges to
          the space sector and provide solutions to it. But, remember that these
          things should not go beyond 30 to 40 words.
        </ListItem>
        <ListItem>
          Now, many of you are getting confused about why challenges part needs
          to be written in the conclusion for this question. This has to be done
          because of the instruction word DISCUSS. In discuss part, 80% of your
          answer should go in support with the statement of the question and 20%
          should go in it’s opposition.
        </ListItem>
        <ListItem>
          Had it been EXAMINE, challenges should be mentioned much earlier and
          it should have occupied half part of the answer.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay22() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question is a straightforward and a technical one. It asked you
        to describe stem cell therapy and its advantages over other treatments.
        Friends, while preparing for economics and Science, we give more
        emphasis based on prelims exam perspective. But in mains examination,
        UPSC asks at least one technical question among these two topics of our
        syllabus. While dealing with such a technical questions, you cannot
        create content on your own. You have to be very precise in your answer
        while attempting such questions. This question was very precise and
        hence, rather than going for what was not required, we will discuss what
        was required in this question.
      </GeneralTextContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>

      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. The
          context here is Disease profile and how stem cells can provide
          solution to it.
        </ListItem>
        <ListItem>
          It is quite difficult to arrive at the context of this question. If
          you are facing such difficulties while deriving the context, you can
          simply start with the basics of the question. And here , basic is stem
          cells. In short, you could have started your answer by giving the
          reference of stem cells.
        </ListItem>
        <ListItem>
          Question was not about stem cells. It was about stem cell therapy. So
          don’t go on explaining what stem cells are, what are their types, what
          are their properties etc.
        </ListItem>
        <ListItem>
          Question contains a leading statement and your actual question starts
          from the word describe. As we have mentioned in our previous
          feedbacks, never explain the leading statement. You can use it for
          just reference purpose.
        </ListItem>
        <ListItem>
          Main part of the question demands you to DESCRIBE the stem cell
          therapy. The instruction word DESCRIBE needs you to cover what and
          how.
        </ListItem>
        <ListItem>
          Here ‘describe the stem cell therapy’ means you need to mention what
          is stem cell therapy and how it is done.
        </ListItem>
        <ListItem>
          Many of you have written big sentences while describing the therapy
          and ultimately it has become very complicated. Stem cell therapy is a
          process and whenever UPSC is asking you about any process, you can
          always represent it through the flowchart.
        </ListItem>
        <ListItem>
          Next part of the main body requires you to write about advantages of
          stem cell therapy over other treatments.
        </ListItem>
        <ListItem>
          Here question is not about advantages of stem cell therapy only. You
          need to compare stem cell therapy and other treatments and you have to
          show, how stem cell therapy is better than other treatments.
        </ListItem>
        <ListItem>
          In the conclusion part, you can mention issues and challenges
          revolving around stem cell therapy. Actually,, it is not asked in the
          question and it is not required as well. But, this aspect can balance
          your answer, which otherwise goes heavily favouring towards stem cell
          therapy.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay23() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question is again an open ended one and sky is the limit to
        write down the content in this answer. Today’s question was asking us to
        write how science is interwoven deeply with our lives and how it has
        triggered off agriculture. One can write an entire essay separately on
        these two topics. Hence, rather than going into what was not required
        part, we will jump to what was required aspect.
      </GeneralTextContainer>
      <ReqNotReqContainer>What was required </ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question.
          Context is very wide in this question. So multiple starts can be
          possible. But, the best way is to link the significance of science
          with various aspects of human life.
        </ListItem>
        <ListItem>
          In the first part of your main body, mention how science is interwoven
          deeply with human life. There is hardly any sphere of human life which
          has remained untouched from the scientific development. Thus, it
          becomes difficult to manage our content within stipulated world and
          space limit.
        </ListItem>
        <ListItem>
          Do not simply list down the points. It is very bad way of representing
          the things in UPSC. Rather, you can categorise similar things under
          common headings and then proceed accordingly.
        </ListItem>
        <ListItem>
          Here, you can divide interwoven part into either Social, Political,
          Economical spheres or into individual and social/public sphere part.
        </ListItem>
        <ListItem>
          This part is very wide and vague, and we need to touch as many as
          corners as we can, while framing our structure. Structure plays very
          crucial role in managing vast data.
        </ListItem>
        <ListItem>
          Next part of the main body is comparatively easier one. Mention what
          are the striking changes triggered of in agriculture by science-based
          technologies.
        </ListItem>
        <ListItem>
          Here while mentioning changes, you need to provide examples as well.
          But, remember that while doing so, always start with basic points
          first. For example do not go directly to satellite imagery, remote
          sensing techniques, aerial photographs etc. Mention High Yielding
          varieties first, as it lies at the core of the agricultural
          development.
        </ListItem>
        <ListItem>
          In conclusion, mention some of the issues or challenges raised by
          uncontrolled and unsustainable scientific advancements.
        </ListItem>
        <ListItem>
          Don’t restrict your conclusion to agriculture alone. The context of
          the question is very wide and it links the entire scientific
          development with human life. So provide wider context accordingly.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay24() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was based on nanotechnology. Every year UPSC asks one
        question based on either nanotechnology or biotechnology or robotics.
        Since 2013, pattern of asking questions on these topics has remained
        more or less similar. Hence, one time preparation for basic things about
        these technologies, along with some current aspects can give you enough
        content to tackle questions based on these topics. Let’s discuss about
        today’s question,
      </GeneralTextContainer>
    
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. Here,
          context is nanotechnology and its multiple benefits.
        </ListItem>
        <ListItem>
          If you are mentioning what nanoparticles are in the start, give proper
          definition. Some answers give definitions like, nanoparticles are the
          particles which are studied at subatomic and nano level. This
          definition does not make any sense, as it keeps on going in a loop.
          Obviously, nanoparticles deal with nanoscale. Give self explanatory
          definition.
        </ListItem>
        <ListItem>
          This question has three sub- questions and the main body of your
          answer should also get divided into three sub parts. Each subpart
          carries equal weightage and if you are missing any, you will lose
          marks.
        </ListItem>
        <ListItem>
          First part demands you to write why nanotechnology is one of the key
          technologies of the 21st century. Here focus on ‘one of the’. This
          means that, there are multiple key technologies in 21st century and
          nanotechnology is one among those. You can throw some light on other
          technologies in one or two sentences. But, major focus should be on
          nanotechnology only.
        </ListItem>
        <ListItem>
          Capturing such minute details creates an excellent impression upon the
          examiner.
        </ListItem>
        <ListItem>
          Next part of the main body asks you to describe the salient features
          of nano-mission. This was the easiest part of this question and you
          just need to list down the salient features of the mission.
        </ListItem>
        <ListItem>
          While writing down the features, don’t keep elaborating each and every
          feature. List down 4 to 5 major features of the mission.
        </ListItem>
        <ListItem>
          In the last part of the main body, you need to describe the scope of
          nano technology in the development process of the country. Here you
          can simply mention various applications of nanotechnology in
          developmental process.
        </ListItem>
        <ListItem>
          While writing down any application or feature of nanotechnology, you
          should always give specific examples and case studies. This adds a
          good flavour to your answer.
        </ListItem>
        <ListItem>
          In the conclusion part, mention some of the issues revolving around
          nanotechnology, just to balance out the answer.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay25() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was the most straightforward question we have faced on
        this platform. It was based on biotechnology, and was asking you to
        write how does it help in improving the living standards of farmers.
        There was no twist in the question, there was no instruction word in the
        question, and there was no hidden part in the question as well. Lets
        discuss about today’s question,
      </GeneralTextContainer>
      <ReqNotReqContainer>What was not required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Don’t keep on explaining what biotechnology is. You can mention it in
          the start, but don’t make it as a part of Main body.
        </ListItem>{" "}
        <ListItem>Don’t explain various types of biotechnology.</ListItem>{" "}
        <ListItem>
          Don’t compare how biotechnology is better than green Revolution.
          Actually, high yielding varieties are part of biotechnology and hence,
          green Revolution and biotechnology are closely related with each
          other.
        </ListItem>{" "}
        <ListItem>
          Don’t mention benefits or applications of biotechnology as question
          demands you not to just list their benefits but how these benefits are
          leading to the improvement of living standards of farmers.
        </ListItem>{" "}
        <ListItem>Don’t explain the problems of farmers.</ListItem>
      </ListContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. In
          this question, the context is, farmers condition is pitiable because
          of low agricultural production, low income from the agriculture, and
          biotechnology can provide solution to some of the issues related to
          agriculture. You can provide some data/facts here.
        </ListItem>{" "}
        <ListItem>
          In the main body, you need to mention how biotechnology improves the
          living standards of farmers. Here don’t just list down the benefits of
          biotechnology.
        </ListItem>{" "}
        <ListItem>
          You can write the benefits, but mention how those benefits are leading
          to the improvement of the living standard of the farmer.
        </ListItem>{" "}
        <ListItem>
          Many of you are giving focus only on crop improvement. Crop
          improvement is only one angle of improving the condition of farmer.
        </ListItem>{" "}
        <ListItem>
          You need to explore various other aspects as well while dealing with
          the condition of farmers. Livestock, farm fishery, dairy, apiculture,
          silviculture, poultry etc. are other sectors where biotechnology can
          be useful in improving the condition of farmers.
        </ListItem>{" "}
        <ListItem>
          If you have just focused on cropping, your answer will sound
          monotonous one. While dealing with such straightforward questions, you
          need to diversify your answer to get good marks.
        </ListItem>{" "}
        <ListItem>
          In the conclusion, you can mention some of the issues associated with
          biotechnology and their solution just to balance the answer, which
          otherwise may sound one-sided.
        </ListItem>{" "}
        <ListItem>
          It becomes very difficult to stretch such straightforward question up
          to 250 words. In this case, you can add on more examples and case
          studies. Just listing down 10-15 points will not give you much marks.
        </ListItem>{" "}
        <ListItem>
          Just to fill up the space, many of you are drawing unnecessary
          illustrations. Illustration is the thing which brings visibility to
          your answer and attract the attention of the examiner. If you’re not
          comfortable with illustration, then we will suggest not to draw it,
          otherwise it will create a negative impression and may ultimately
          reduce your marks even if you have written good content below it.
        </ListItem>{" "}
        <ListItem>
          Also, if you are drawing illustration, don’t explain it below and vice
          versa. If you are doing both, it sounds repetition and repetition of
          points is strictly unwarranted in answers.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay26() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was about environmental impact of coal-fired thermal
        plants. Although the question looks straight forward in the first
        instance, if you read it carefully, it is a very specific one and needs
        lot of brainstorming. Deciphering the question plays very crucial role
        in answering today’s question. Let’s discuss about today’s question,
      </GeneralTextContainer>

      <ReqNotReqContainer>What was not required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Don’t explain the leading statement in your answer. Leading statement
          of this question focuses on environmental impact assessment and you
          don’t have to explain it beyond 20 to 25 words
        </ListItem>
        <ListItem>
          Don’t keep on explaining the other impacts of coal-fired thermal power
          plants than environmental one.
        </ListItem>
        <ListItem>
          Don’t explain environmental impact of coal-fired thermal power plants
          in general. Question here specifically demands to list down the
          impacts of those coal-fired thermal power plants which are located
          near coal pitheads.
        </ListItem>
        <ListItem>
          Question is not on environmental impact of coal mining, so don’t
          explore that angle.
        </ListItem>
        <ListItem>
          No need to explain how coal-fired thermal power plants are important
          and what are the benefits of their location near coal pitheads.
        </ListItem>
      </ListContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. Here,
          the context revolves around coal-fired thermal power plants and their
          negative environmental externalities.
        </ListItem>
        <ListItem>
          You can give reference of leading statement, that is environment
          impact assessment, in the beginning. It is always advisable to make it
          clear to the examiner that, you have separated the leading statement
          and you’re not going to explain it any further in the starting
          paragraph itself.
        </ListItem>
        <ListItem>
          In the main body, discuss the environmental impacts of coal-fired
          thermal plants located near pitheads.
        </ListItem>
        <ListItem>
          Whenever UPSC is asking about impacts, you can always categorise into
          positive and negative ones. But in this case, coal-fired thermal power
          plants have negative externality only.
        </ListItem>
        <ListItem>
          Hence, if you’re not mentioning any positive impacts then also it is
          okay. And even if you are mentioning positive impacts, it won’t give
          you any edge over other answers. Certain things are inherently
          negative in nature and there is no need to explore positivity in
          those. You may find some positivity, but it will take a lot of time to
          brainstorm and we don’t get that much time in the final examination.
          Thus, while preparing itself try to figure out which things are
          negative in nature and which things are inherently positive in nature.
        </ListItem>
        <ListItem>
          In the main body, while mentioning the impacts of coal-fired thermal
          plants, keep on linking them to pitheads. Environmental impacts on
          coal-fired thermal power plants and other coal-fired thermal power
          plants are nothing different. You have to write the same points only,
          but using headings clearly mention it. This is just to let examiner
          know that you have understood the question well.
        </ListItem>
        <ListItem>
          Use such smart tricks guys. Nobody knows everything. How smartly you
          are putting your content without missing the track makes a lot of
          difference.
        </ListItem>
        <ListItem>
          In the conclusion part, provide way ahead to overcome these negative
          impacts.
        </ListItem>
        <ListItem>
          Here lies another key of this question friends. Many of you are
          writing, we need to shift to renewable energy and cleaner
          alternatives. Of course, we need to do that. But we should not forget
          that, we are a developing economy and shifting to costly renewable
          alternatives will not be beneficial for our growth perspective. If you
          are providing this solution, then your answer sounds superficial one.
        </ListItem>
        <ListItem>
          While providing solution in this case, we need to be practical. But at
          the same time we must not let environmental degradation go on. In
          short, we can mention, Coal fired thermal power plants cannot be
          completely eliminated from India looking at the growth perspective and
          hence to minimise its externality certain new technologies can be
          adopted to improve their efficiency.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay27() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was about interlinking of river, its advantages and
        environmental impacts. As compared to yesterday‘s question, today’s
        question is comparatively an easier and straightforward one.
        <br /> But, we have received less number of quality answers as compared
        to yesterday. Let’s discuss about today’s question,
      </GeneralTextContainer>
      <ReqNotReqContainer>What was not required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Do not explain the leading statement of the question. Do not stretch
          the history too much regarding interlinking of rivers.
        </ListItem>
        <ListItem>
          Don’t separately mention positive and negative environmental impacts
          of river linking project. We are already discussing advantages of the
          project in the first part of the question and if you are repeating the
          positive environmental impacts then it will sound repetitive.
        </ListItem>
        <ListItem>
          Don’t explain the obstacles or hurdles or challenges of interlinking
          of rivers.
        </ListItem>
        <ListItem>
          Don’t just focus on environmental advantages of river linking.
          Question demands you to mention general advantages but specific
          environmental impacts.
        </ListItem>
      </ListContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with a greater context around the question. The
          context of the question revolves around the hydro-meteorological
          disaster proneness of India and role of River linking in resolving it.
        </ListItem>
        <ListItem>
          In start para, you can give references with respect to the leading
          statement. But while doing so, don’t give erroneous information. Many
          of you are writing that river linking project was conceived in 1970.
          Actually, it was put forward for the first time by Britishers in late
          1830s but, eventually it got sidetracked due to development of
          Railways in 1853.
        </ListItem>
        <ListItem>
          In the main body, first talk about advantages of river linking
          project. While mentioning the advantages, don’t just keep on listing
          them down. Give suitable examples to your points.
        </ListItem>
        <ListItem>
          For example, if you are mentioning river linking project can help in
          flood controlling, you can write in the following way, Flood control:-
          interlinking of river transfers surplus water to water deficit basins,
          and helps in controlling flood peaks. e.g. Kosi-Mechhi interlinking
          project will transfer surplus water of Kosi into Mechhi and Mahananda
          River
        </ListItem>
        <ListItem>
          Write four or five points in this manner, but mention them
          elaborately.
        </ListItem>
        <ListItem>
          While mentioning such case studies and examples, it is always
          advisable to use maps. Many of you are not drawing maps at all.
          Remember guys, whenever you are mentioning any spatial aspect in your
          answer always represent it through map.
        </ListItem>
        <ListItem>
          Many of you are worried about how to draw the map of entire India
          representing all river linking projects. Practically it is not
          possible to remember all the links and it is very time and space
          consuming on final day of exam as well. Hence, we need to draw maps on
          smaller scale.
        </ListItem>
        <ListItem>
          After mentioning advantages of river linking project, go into
          discussing the negative environmental impacts (no need to go for
          positive impacts as it is already merged into advantages). Here also,
          you need to give examples, case studies and small maps.
        </ListItem>
        <ListItem>
          Almost everybody has mentioned about Ken Betwa river linking project.
          And the same example is getting repeated in the answer again and
          again, due to lack of content. Never repeat the same example in the
          same answer. Diversify your answer with multiple examples. If you
          don’t have multiple examples, then don’t use it at all. Under any
          circumstances, repetition should not be there in your answer.
        </ListItem>
        <ListItem>
          In the conclusion part, you can provide long-term sustainable
          solutions to river linking projects. Many of you are just giving
          solution to negative environmental impacts through engineering
          solutions and government measures. Here we need a lot of
          brainstorming. Environmental impacts can be reduced by promoting
          rainwater harvesting, traditional water conservation techniques and
          nature-based solutions.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay28() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was on much debated topic, that is climate change and
        its impact on India in general and Himalayan and coastal states in
        particular.
        <br />
        Let’s discuss about today’s question,
      </GeneralTextContainer>
      <ReqNotReqContainer>What was not required? </ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          No need to explain the leading statement, which says, climate change
          is a global problem.
        </ListItem>
        <ListItem>Don’t mention the causes of climate change.</ListItem>
        <ListItem>
          Don’t go on explaining the components of climate change.
        </ListItem>
        <ListItem>
          Don’t explore the positive impacts of climate change on India. Climate
          change has both positive and negative impacts. But its positive
          impacts are mostly confined to temperate regions. India is a tropical
          country and climate change is going to affect India very badly. If you
          are exploring positive aspect in this answer, then it shows lack of
          conceptual clarity.
        </ListItem>
      </ListContainer>

      <ReqNotReqContainer>What was required? </ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. Here
          the context lies around climate change and its global impact in
          general and impacts on India in particular.
        </ListItem>
        <ListItem>
          Rather than defining climate change in the beginning, you can provide
          data/facts/reports to substantiate that climate change is the reality
          and it is affecting various parts of the globe as well as India.
        </ListItem>
        <ListItem>
          First part of the main body asks you to explain how climate change
          affects India. Don’t confine your points just to environmental
          impacts. Question demands you to mention general impacts of climate
          change on India.
        </ListItem>
        <ListItem>
          You can divide those impacts into social impacts, political impacts,
          environmental impacts and economical impacts. If you are just
          exploring environmental impacts and it’s increasing disaster
          proneness, this means that you are just analysing the one side of the
          issue.
        </ListItem>
        <ListItem>
          First part of the question demands you to portray a vast canvas and
          you need to touch various aspects of climate change. Points like
          climatic refugee, forced migrations, disaster displacements will
          certainly give an edge to your answer.
        </ListItem>
        <ListItem>
          In the next part of the main body, you need to mention how climate
          change affects Himalayan and coastal states separately. Don’t merge
          them under a single heading as both will suffer differently.
        </ListItem>
        <ListItem>
          Many of you are in dilemma that, we have already mentioned the impacts
          of climate change on India in the first part of the answer and now
          what to write in second part. It may sound repetition. And here lies
          the key guys, you have to mention points in such a way that they
          shouldn’t sound repeated one. This skill is going to be tested by UPSC
          in this particular answer.
        </ListItem>
        <ListItem>
          To avoid repetition, you can use specific case studies and examples in
          second part of your answer. On the other hand, in first part you can
          just mention general issues without mentioning specific examples and
          case studies. In first part of your answer, you can draw the entire
          map of India while in second part of your answer you can draw
          small-scale maps.
        </ListItem>
        <ListItem>
          Conclude your answer by giving solutions to climate change and how
          India should withstand amidst climate change events. This is
          comparatively easier part of this answer.
        </ListItem>
        <ListItem>
          Many of you are not giving examples/case studies/maps in your answers.
          Whenever you come across any geography and environment related
          question, always try to include at least one spatial aspect, that is
          map in your answer.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay29() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was on issues pertaining to disposal of solid waste and
        removal of toxic waste from the environment. In short, it was all about
        waste management.
        <br />
        Let’s discuss about today’s question,
      </GeneralTextContainer>
      <ReqNotReqContainer>What was not required? </ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Don’t describe what solid waste is and what are the components of
          solid waste.
        </ListItem>
        <ListItem>
          No need to explain the causes of generation of solid waste
        </ListItem>
        <ListItem>
          No need to mention the impact of solid waste. Question was on
          impediments and not on impacts. Read the question carefully.
        </ListItem>
        <ListItem>
          No need to separate various types of toxic wastes in the environment.
          Many of you have divided toxic waste into E-waste, biomedical waste,
          nuclear waste etc. If you are going to divide it in such a way, then
          your answer will become very lengthy.
        </ListItem>
      </ListContainer>

      <ReqNotReqContainer>What was required? </ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with a greater context around the question. The
          context in this question lies around the generation of solid waste and
          its poor management. Rather than giving definition of solid waste, you
          can provide concrete facts or data in the beginning.
        </ListItem>
        <ListItem>
          Many of you are just providing data and not linking the data to the
          context of the question. For example, many answers are starting with,
          ‘India generates 62 million tonnes of solid waste per year’. There is
          nothing wrong in providing this data. But, this data doesn’t make any
          sense here. Solid waste generation is not an issue, rather its poor
          disposal and poor management is the real issue. And your start must
          reflect this.
        </ListItem>
        <ListItem>
          Hence you can start like, India generates 62 million tonnes of solid
          waste per year but out of which only 70% is collected and 10% is
          treated. Start like this creates greater context around the question.
        </ListItem>
        <ListItem>
          . In the first part of your main body, write about the impediments in
          disposing the solid waste. This is comparatively an easier part in
          this question.
        </ListItem>
        <ListItem>
          To make your answer unique, you can use some data/facts/case
          studies/illustrations in this part. But always remember, whenever you
          are using any data in your answer, always substantiate it by giving
          sources, otherwise your answer sounds vague.
        </ListItem>
        <ListItem>
          Next part of the main body requires you to suggest measures to remove
          toxic waste from the environment. Many of you have not focused on
          toxic waste part of this sub-question.
        </ListItem>
        <ListItem>
          Read the question carefully guys. Many of you are giving suggestions
          like recycling, reuse, public awareness etc. How are you going to
          recycle and reuse the toxic waste? Is public awareness enough to deal
          with the problem of toxic waste? How are you going to create energy
          from toxic waste, as many of you are giving solution to set up
          waste-to-energy plants?
        </ListItem>
        <ListItem>
          This means we need specific technological interventions in this. You
          can reuse or recycle the toxic waste, but for that also, you need to
          take the help of technology. Therefore, this particular part of the
          question needs technological solutions first and then you can write
          general points.
        </ListItem>
        <ListItem>
          You can provide some sustainable general solutions in conclusion part.
          These solutions need not to be restricted to toxic waste alone, you
          can expand them to overall solid waste management. Here you can
          suggest solutions like, set up waste to energy plants, circular
          economy, 4 Rs etc.
        </ListItem>
        <ListItem>
          It is always advisable to touch the core aspect of the solution. Solid
          waste management rules-2016 is the only best thing happened towards
          this, in India. Hence, your answer must have the reference of these
          rules. You don’t have to explain them in detail, just use them as a
          reference anywhere in your answer smartly.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay30() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was the most difficult question we have ever faced in
        our daily answer writing initiative. Like we often see in cricket match,
        length delivery is followed by bouncer and vice versa. Similarly,
        yesterday was a full toss and today it was a ferocious bouncer. While
        facing the full toss, you have lot of options available to play your
        shots. But for bouncers, you should be knowing what not to do. Otherwise
        you will end up in throwing your wicket away. And 99% of answers
        received today have thrown their wicket away.
        <br /> Let’s discuss about today’s question,
      </GeneralTextContainer>
      <ReqNotReqContainer>What was not required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Don’t explain the impacts and benefits of developmental projects.
        </ListItem>
        <ListItem>
          Don’t explain why rehabilitation is important during development of
          project.
        </ListItem>
        <ListItem>
          Don’t explain what should be done during rehabilitation.
        </ListItem>
        <ListItem>
          Don’t explain the issues involved in rehabilitation process.
        </ListItem>
        <ListItem>
          Don’t explain the reasons and objectives of rehabilitation.
        </ListItem>
        <ListItem>Don’t explain the rehabilitation policy.</ListItem>
        <ListItem>
          Don’t explain how environment plays an important role in
          rehabilitation process.
        </ListItem>
        <ListItem>
          Don’t unnecessarily link rehabilitation to urbanisation. Urbanisation
          is mostly happening in India because of out-migration from rural
          areas. Rehabilitation of human settlement doesn’t account for reasons
          behind the urbanisation
        </ListItem>
        <ListItem>
          Don’t explain controversies associated with rehabilitation process and
          associated developmental activities.
        </ListItem>
        <ListItem>
          Don’t explain environmental impacts of developmental projects.
        </ListItem>
      </ListContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. The
          context of this question revolves around the rehabilitation due to
          developmental projects and its consequences.
        </ListItem>
        <ListItem>
          While mentioning start, you can always provide a substantiated data
          regarding number of rehabilitations or status of rehabilitation in
          India. You can cite some examples here.
        </ListItem>
        <ListItem>
          First part of the main body is the most crucial one for this answer.
          If you read the question carefully you will see that first part of the
          question is actually a leading statement. As we have discussed it
          earlier we are not going to explain it.
        </ListItem>
        <ListItem>
          Because of that, many of you have directly started writing the
          mitigation measures. But if you carefully brainstorm on the flow of
          the answer, you’ll come to know that, before providing solutions, we
          need to find the problems first.
        </ListItem>
        <ListItem>
          Now the problem arises, how to explore the issues? For this, you need
          to take the reference of leading statement. Leading statement clearly
          mentions that rehabilitation of human settlement has certain
          environmental impacts and due to which rehabilitation process always
          attracts the controversy.
        </ListItem>
        <ListItem>
          Hence we need to explain the adverse environmental impacts arising due
          to rehabilitation process and then we need to provide specific
          solution to these issues.
        </ListItem>
        <ListItem>
          If you are mentioning general issues arising during rehabilitation
          process then your answer becomes vague and it does not meet the
          requirement of the question.
        </ListItem>
        <ListItem>
          Read the question carefully guys. Although we are not going to explain
          the leading statement, this does not mean that we should be completely
          ignoring it. Using leading statement tried to create the holistic
          content around the question.
        </ListItem>
        <ListItem>
          In questions like these examiner doesn’t look much for the content as
          well as your start and conclusion. She simply looks whether you have
          understood the question and have hit the demand. Even if you are
          writing just 70-80 words for this answer but with proper approach then
          you will end up in getting 4+ marks.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay31() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was based on the basics of disaster management, and was
        asking us to mention the key areas to be focused while dealing with any
        disaster. Unfortunately, we keep on running behind various types of
        disasters, but nobody pays enough attention towards the basics of the
        topic. This is not your fault, you have been taught in such a way that
        you never look for the basics of disaster management. This question was
        asked in 2013, that is, the first disaster management question as per
        the new syllabus. And in its introduction itself, UPSC has made it very
        clear that they are not going to ask beyond the basics.
        <br />
        Let’s discuss about today’s question,
      </GeneralTextContainer>
      <ReqNotReqContainer>What was not required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          No need to explain in detail about vulnerability and risk assessment.
        </ListItem>
        <ListItem>
          Don’t explain types of vulnerabilities, like social vulnerability,
          economic vulnerability, environmental vulnerability etc.
        </ListItem>
        <ListItem>
          Don’t explain the entire disaster management process, as the question
          specifically asks to mention the importance only for pre-disaster
          stage.
        </ListItem>
        <ListItem>
          Don’t keep on explaining the course of action you are going to take,
          as you do while solving case studies in ethics.
        </ListItem>
      </ListContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with a greater context around the question. The
          context of the question revolves around various pre-disaster
          management stages and their relative importance while dealing with any
          disaster.
        </ListItem>
        <ListItem>
          While giving the context, it is always better to provide any data or
          report to substantiate the importance of risk and vulnerability
        </ListItem>
        <ListItem>
          In the first part of the main body, you can either separate
          vulnerability and risk assessment while mentioning their importance in
          pre-disaster management process or you can merge them under a single
          heading. As this is the 10 marker question, you can merge them as we
          have limited space and word limit.
        </ListItem>
        <ListItem>
          Next part of your main body demands you to mention key areas that you
          are going to focus as an administrator while dealing with any
          disaster.
        </ListItem>
        <ListItem>
          This part sounds similar to that of case study approach of ethics. But
          we are not supposed to write it like a case study way. Generally, UPSC
          never asks such questions in GS - 1,2,3. UPSC may ask whether we agree
          or not, but never asks our course of action in papers other than
          ethics.
        </ListItem>
        <ListItem>
          If you are writing that, ‘We need to take care of elderlies, we need
          to look after physically disables, we need to seek help from
          non-governmental organisations, we need to create public awareness
          etc.’, this means that you are giving case studies like ethics.
        </ListItem>
        <ListItem>
          Read the question carefully guys. Question asks you, what are the key
          areas that you would focus? As we have discussed earlier, whenever
          UPSC asks WHAT type questions you don’t need to elaborate much. This
          means that here, you just need to mention or list down various key
          areas.
        </ListItem>
        <ListItem>
          Also, question asks you to mention KEY AREAS. Key areas are the
          critical ones and they are generally less in number, that’s why they
          are called so. If you have listed more than five or six areas, then
          also it is called missed focus.
        </ListItem>
        <ListItem>
          In the end, there is no need to mention obstacles in disaster
          management process in India. Rather, you can end with international
          protocols and conventions.
        </ListItem>
        <ListItem>
          There are certain obvious things which examiner looks into your
          answer. In this particular answer, Sendai framework is a very obvious
          point. You should be including such basic things in your answer.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay32() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        In the first instance, today’s question was looking like a current event
        based question. But if you read the question carefully, it was asking
        you to discuss, shift in The government’s approach from reactive one to
        proactive one while dealing with any disaster. Today we not going into
        the elaborative feedback, because we have received a model answer which
        is worth of giving a feedback in thousand words.
        <br />
        Let’s discuss about today’s question,
      </GeneralTextContainer>
      <ReqNotReqContainer>What was not required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>Don’t define the meaning of disaster in the start</ListItem>
        <ListItem>
          Don’t explain various types of disasters and what are the reasons
          behind them.
        </ListItem>
        <ListItem>
          Don’t keep on tracing the historical steps taken by government in
          disaster management.
        </ListItem>
      </ListContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with a greater context around the question. In this
          question, context revolves around the shift in the approach of the
          government from reactive one to proactive one. In short, earlier
          government used to focus on post-disaster management aspect, while now
          it is focusing on pre-disaster management aspect.
        </ListItem>
        <ListItem>
          You can either include earlier approach in the start it self, or you
          can mention a separate para for that, like we have discussed during
          our last session of ABCD of Answer Writing. For this particular
          question, we will prefer Two para intro approach.
        </ListItem>
        <ListItem>
          In second para of the intro, you can mention previous approaches of
          government and lacuna in those approaches.
        </ListItem>
        <ListItem>
          In the main body, discuss the recent measures initiated by the
          government in disaster management.
        </ListItem>
        <ListItem>
          Now, many of you are wondering why should we write proactive approach
          here and why can’t we mention various disaster management measures
          recently taken up by the government? As the question clearly mentions
          that, there is shift from reactive approach, which means that now the
          government has adopted proactive approach.
        </ListItem>
        <ListItem>
          If you are writing General measures without giving special emphasis to
          proactive measures, you will automatically lose marks. That’s what we
          call proper deciphering of question, which we have already discussed
          in our previous ABCD of Answer Writing sessions.
        </ListItem>
        <ListItem>
          Here one thing should be noted, the question asked you to discuss and
          not just to list down. This means you need to give a little bit
          elaboration of points.
        </ListItem>
        <ListItem>
          In the conclusion, you can throw some light on various challenges or
          issues involved in proactive disaster management approach. This part
          is required to balance your answer, which otherwise leans heavily
          towards favouring the proactive approach.
        </ListItem>
        <ListItem>
          It is always advisable to use the case studies showing how proactive
          approach has been more helpful than reactive one.
        </ListItem>
        <ListItem>
          If you are adding an illustration showing past and present approaches,
          it will be an icing on the cake.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay33() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was a typical disaster management question, as we learn
        in coaching as well as through notes. It was based on earthquake and
        disaster preparedness for mitigating its impact. Still, hardly any copy
        had met the demand of the question.
        <br />
        Let’s discuss about today’s question,
      </GeneralTextContainer>
      <ReqNotReqContainer>What was not required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>Don’t explain the causes of earthquake.</ListItem>
        <ListItem>Don’t explain the impacts of earthquake.</ListItem>
        <ListItem>
          Don’t explain in detail the mitigation measures to tackle earthquake.
        </ListItem>
      </ListContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with a greater context around the question. In this
          question, context revolves around the proneness of India to earthquake
          and increasing incidences of earthquakes.
        </ListItem>
        <ListItem>
          While mentioning about the proneness to the earthquake, it is
          advisable to show it through map. Dont draw detailed maps as you wont
          get enough time in the final exam to do so. Just show zone V and IV in
          the map.
        </ListItem>
        <ListItem>
          Main body demands you to show the gaps between actual requirement and
          India’s preparedness to tackle earthquake.
        </ListItem>
        <ListItem>
          These gaps are nothing but the problems/issues/challenges in India’s
          earthquake preparedness. But while mentioning those, use appropriate
          heading.
        </ListItem>
        <ListItem>
          For example here you can use heading, Significant gaps in India’s
          preparedness for mitigation of earthquake impacts Dont think much
          while deciding the heading. Directly use the words from the question
          itself.
        </ListItem>
        <ListItem>
          In conclusion, give solution to these gaps along with case study.
        </ListItem>
        <ListItem>
          This was a very straightforward question, but unfortunately many of
          you overthought and made this question unnecessarily complicated. Keep
          it simple and straight.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay34() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today, we faced the first question of internal security, which was based
        on insurgency of Northeast region, and analysis of the major reasons
        behind its survival for the long time. This question was a very
        straightforward one. There was no twist involved in it. Let’s discuss
        about it,
      </GeneralTextContainer>
      <ReqNotReqContainer>What was not required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>No need to define the insurgency.</ListItem>
        <ListItem>
          No need to explain in detail the incidences of insurgency in Northeast
          India.
        </ListItem>
        <ListItem>Don’t explain the impacts of armed insurgencies</ListItem>
      </ListContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with a greater context around the question. Here,
          the context of the question revolves around the persistent insurgency
          in Northeast India.
        </ListItem>
        <ListItem>
          You can mention few of the insurgency incidences, but don’t keep on
          listing them down elaborately.
        </ListItem>
        <ListItem>
          In the main body, you need to mention the reasons behind the survival
          of armed insurgency in this region.
        </ListItem>
        <ListItem>
          Here many of you are getting confused with the word armed. Don’t make
          this question over complicated, as most of the times insurgencies are
          of armed in nature.
        </ListItem>
        <ListItem>
          Also, many of you are getting confused while discussing long-term
          survival of armed insurgency in Northeast India. Again, don’t make it
          over complicated. The reasons behind the origin are same as that of
          its long-term survival.
        </ListItem>
        <ListItem>
          It is good that you can point out such minute details in the question.
          But while finding such a details you should not get deviated from the
          basics of the topic.
        </ListItem>
        <ListItem>
          It is always advisable to introduce a map showing cross-border
          insurgency in Northeast region. A particular case study will be an
          icing on the cake.
        </ListItem>
        <ListItem>
          Divide the causes into political, social, international, economical
          etc.
        </ListItem>
        <ListItem>
          Conclude your answer by giving some government measures and
          international cooperation to overcome the problem of armed insurgency
          in Northeast India.
        </ListItem>
        <ListItem>
          Here the instruction word ANALYZE is somewhat similar to that of
          discuss only.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay35() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today's question was about CPEC and it’s possible threats to India.
        Question was straightforward one, but many of you did not pay due
        attention to the instruction word that is CRITICALL EXAMINE and have
        written one-sided answers. Let’s discuss about yesterday’s question,
      </GeneralTextContainer>
      <ReqNotReqContainer>What was not required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          No need to explain the detailed features of CPEC separately.
        </ListItem>
        <ListItem>
          Don’t explain the benefits of CPEC of Pakistan and China.
        </ListItem>
        <ListItem>
          Explain why China and Pakistan have implemented this project.
        </ListItem>
        <ListItem>
          Don’t give burdensome and heavy explanations of PSIR optional. Keep
          your arguments simple and straight.
        </ListItem>
      </ListContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with a greater context around the question. Here,
          the context was very straightforward, that is, CPEC and its regional
          implications.
        </ListItem>
        <ListItem>
          It is always advisable to draw the map of CPEC and surrounding areas,
          so that it can give a clear picture of its vicinity near the critical
          areas.
        </ListItem>
        <ListItem>
          Don’t draw the map of entire India as well as South Asia or Asia.
          Don’t waste the space in your answer sheet unnecessarily. The more
          details you are going to introduce in CPEC illustration, the more
          marks you will get. This does not mean that you should keep on drawing
          very finer details because we will face serious time constraint in
          final examination.
        </ListItem>
        <ListItem>
          First part of the main body is very straightforward, that is, security
          threats of CPEC to India. Many of you have done well in this aspect.
        </ListItem>
        <ListItem>
          But, while writing answers, we have observed a certain degree of
          hatred towards Pakistan, and it is getting reflected in your answer.
          Impartiality is the foremost virtue which we should cherish while
          writing the answer. Our opinions should not be biased towards any
          particular section of national and international community.
        </ListItem>
        <ListItem>
          Many of you have went to extremes that, Pakistan is a threat to India.
          Please avoid such extremities as you will not only end up into getting
          less marks for this particular question, but your entire GS3 answers
          will get affected because of this shallow thinking.
        </ListItem>
        <ListItem>
          As the question asks you to EXAMINE, we need to portray both positive
          and negative sides of CPEC as we have discussed in our earlier
          questions. Now, many of you are wondering how CPEC can help India.
          Here, we need broad minded thinking.
        </ListItem>
        <ListItem>
          CPEC will bring prosperity to disturbed areas of Pakistan and China.
          This means less youth will get attracted towards fanaticism and
          extremism. And, indirectly it will be a boon to Indian security
          perspective. There are other regional connectivity benefits as well,
          but this indirect benefit should be there in your answer because it
          directly links with the syllabus of GS3.
        </ListItem>
        <ListItem>
          Question also asks you to CRITICALLY EXAMINE. Critically means you
          need to give your opinion after analysing both the sides. And after
          analysing the dues of CPEC we can say that it will be a threat to
          India’s security perspectives.
        </ListItem>
        <ListItem>
          Conclude your answer by giving way forwards or steps that Indians
          should taken to nullify and counter threats of CPEC.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay36() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was based on money laundering, it’s significance
        (impacts) on India and steps needed to control it. Let’s discuss about
        today’s question,
      </GeneralTextContainer>
      <ReqNotReqContainer>What was not required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Don’t explain the leading statement in detail. You can mention the
          impact of money laundering on country’s economic sovereignty in main
          body.
        </ListItem>
        <ListItem>
          Don’t explain the positives of money laundering. Here significance
          means impacts. And money laundering has negative impacts only.
        </ListItem>
        <ListItem>No need to explain the causes of money laundering.</ListItem>
        <ListItem>No need to mention sources of money laundering.</ListItem>
      </ListContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with a greater context around the question. Here,
          the context revolves around money laundering and it’s threat to the
          country.
        </ListItem>
        <ListItem>
          It is always good to give some fact/data. It this particular answer
          we’ll suggest you to give two para intro. First para should contain
          the data/fact and second one can have definition of money laundering.
        </ListItem>
        <ListItem>
          In the main body, talk about the significance of money laundering on
          India.
        </ListItem>
        <ListItem>
          In most of the times, significances are positive and negative. But
          there are certain things which are inherently negative in nature and
          money is one among those.
        </ListItem>
        <ListItem>
          You can divide significances either into social, political, economical
          or into long term and short term ones.
        </ListItem>
        <ListItem>
          In second part of the question mention steps required to control it.
          Here, major focus us should be on government measures as there is very
          little that an individual can do here.
        </ListItem>
        <ListItem>
          If you can add any international example/case study where money
          laundering has been successfully prevented can be added to the
          conclusion.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay37() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was based on border issues and various challenges in
        effective border management. Question further asks you to mention the
        strategies for effective border management. This question was a
        straightforward question and almost all sincere candidates know enough
        around the issue. Hence presentation and structuring makes a lot of
        difference in this answer.
        <br />
        Let’s discuss about today’s question,
      </GeneralTextContainer>
      <ReqNotReqContainer>What was not required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Don’t explain various components and aspects of border management.
        </ListItem>
        <ListItem>
          Don’t explain the causes behind ineffective border management.
          Actually causes are similar to that of challenges but we need to give
          heading as challenges, as it is directly asked in the question.
        </ListItem>
        <ListItem>
          Don’t explain the impacts of poor border management.
        </ListItem>
      </ListContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with a greater context around the question. Here,
          the context of the question revolves around issues in border
          management due to difficult terrain and hostile relations with
          neighbouring countries.
        </ListItem>
        <ListItem>
          While giving the start you can use the leading statement as a
          reference. Also it is always advisable to draw a map showing border
          issues.
        </ListItem>
        <ListItem>
          Many of you are still getting confused about when and where to use
          maps. A simple thumb rule we can use that, whenever your question or
          answer gives any reference to geographical or spatial aspect, always
          look for a map.
        </ListItem>
        <ListItem>
          In the first part of main body mention various challenges in effective
          border management.
        </ListItem>
        <ListItem>
          In this part, many of you are mostly focusing on Pakistan and China.
          Indian shares border with other countries as well. Thus, you need to
          equally focus on other countries.
        </ListItem>
        <ListItem>
          Also many are missing the component of marine border and mostly
          focusing on terrestrial border. No need to specifically mention border
          issues with Afghanistan. Although India shares direct border with
          Afghanistan, north west part of Jammu and Kashmir is occupied by
          Pakistan and hence we have very little say in border management in
          Afghanistan Border.
        </ListItem>
        <ListItem>
          In the second part of main body provide strategies for effective
          border management.
        </ListItem>
        <ListItem>
          Question demands you to ELUCIDATE. Elucidate means to explain. And you
          need to explain various challenges and strategies. If you have just
          listed down various challenges and strategies then automatically we
          have reduced your marks.
        </ListItem>
        <ListItem>
          Answer can be well decorated with current examples and case studies.
          Mentioning of various initiatives like CIBMS, BOLD-QIT etc. and
          various committees like Shekatkar committee will definitely boost your
          marks.
        </ListItem>
        <ListItem>
          Many of you are still starting your answer with an example, like
          recent Drone attack. It is good to give current references but they
          should be part of your main body.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay38() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was based on misuse of internet and social media by
        nonstate actors and guidelines to prevent this misuse. Although,
        question looks like a generic one, it has very specific details to be
        mentioned while writing the answer. Let’s discuss about today’s
        question,
      </GeneralTextContainer>
      <ReqNotReqContainer>What was not required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          No need to explain in detail about various nonstate actors.
        </ListItem>
        <ListItem>
          No need to mention various security concerns arising because of
          activities of nonstate actors.
        </ListItem>
        <ListItem>
          No need to explain the challenges while implementing the guidelines in
          preventing this menace. Now, many of you are wondering that, we need
          to balance the answer by providing challenges and solutions
          accordingly. But friends, we have already discussed threats, which are
          somewhat similar to that of challenges only. If you write challenges
          separately, it will sound as repetition. Also, we should not forget
          that this is a 10 marker and we have very limited space and word limit
          to write.
        </ListItem>
        <ListItem>
          Don’t just keep on explaining cyber security angle in the main body.
          If you are not going to diversify the various threats of internet and
          social media, then your answer sounds monotonous one.
        </ListItem>
      </ListContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with a greater context from the question. Here, the
          context of the question revolves around the misuse of internet and
          social media by various nonstate actors and respective security
          concerns raised by them.
        </ListItem>
        <ListItem>
          Don’t start your answer with negative note. Many of you have directly
          started criticising the internet and social media. It is agreed that,
          the leading statement says social media and internet are causing
          security concerns. But as we have discussed earlier, never give biased
          opinion in the beginning itself.
        </ListItem>
        <ListItem>
          Try to bring out the positivity also while criticising internet and
          social media in the start. You can start like, Internet and social
          media has brought the world together but it has its dark side as well,
          and because of their misuse, they have caused serious threats to
          security of the nation.
        </ListItem>
        <ListItem>
          In start itself, provide some facts and data supporting the claim that
          internet and social media are point of concern.
        </ListItem>
        <ListItem>
          In this particular question, start is very crucial and many of you are
          losing the marks in start itself. While starting your answer, don’t
          forget to mention internet and social media both.
        </ListItem>
        <ListItem>
          In the first part of main body, mention how internet and social media
          has been misused in recent past.
        </ListItem>
        <ListItem>
          Don’t just list down the examples here. Many of you are simply writing
          wannacry attack, ATM hacks, Threat of ISIS etc. these are very
          superficial points guys. While explaining Main body, never use
          examples as main content. First write broader context around the issue
          and then use examples for supplementary purpose.
        </ListItem>
        <ListItem>
          Examples should be specific one. The more specificity you will bring
          in, the more marks you will get.
        </ListItem>
        <ListItem>
          In second part of the main body, you need to suggest effective
          guidelines to curb the threat arising due to misuse of internet and
          social media. Here, these guidelines are equivalent to
          solutions:suggestions/measures/way forward etc. But, as question
          contains the word guidelines, you need to give heading as guideline
          only.
        </ListItem>
        <ListItem>
          You can conclude your answer by saying that, cyber security can be
          tackled with the help of cyber intelligence itself. In short, you need
          to balance your arguments here.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay39() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was literally a bouncer and was very difficult to
        decipher in the first instance. UPSC asks such bouncers which are
        time-consuming and if you get trapped while attempting these questions
        then it automatically affects your performance while dealing with other
        questions. We generally suggest to attempt such questions at the end.
        Today’s question was about AFSPA, violation of human rights due to its
        misuse, supreme court’s views on it and critical evaluation of its
        requirement. It has various facets and one needs to explore all of these
        to fetch good marks. In such lengthy questions, content does not matter
        because we hardly get much space to write. The most important thing
        which matters here is holistic coverage of the question. Hence, rather
        than going into what was not required part, we’ll directly jump into
        what was required part. Let’s discuss about today’s question,
      </GeneralTextContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with a greater context around the question. Here,
          the context revolves around the requirement of AFSPA and misuse of its
          certain provisions.
        </ListItem>
        <ListItem>
          In the start, don’t keep on explaining incidences of human right
          violation in brief. You can add them in the first part of the main
          body as an example or case study.
        </ListItem>
        <ListItem>
          Also, there is no need to trace the history of AFSPA. Keep the context
          revolving in contemporary times.
        </ListItem>
        <ListItem>
          In the first part of main body, you need to mention the sections of
          AFSPA which are opposed by the activists. Here, question specifically
          mentions you to note down the sections. Hence, you need to be very
          specific. Don’t just vaguely write down the criticisms or provisions
          of AFSPA.
        </ListItem>
        <ListItem>
          Many of you are linking these sections to that of violation of certain
          fundamental rights. But care should be taken that, question asks you
          to mention the various objectionable sections and it does not ask you
          to explain them in detail.
        </ListItem>
        <ListItem>
          Read the first part of the question very carefully guys. It is WHAT
          and not WHY. If it would have been WHY, then your explanation of these
          objectionable sections would have been valid.
        </ListItem>
        <ListItem>
          Second part of the main body is the most tricky part of this question.
          Many are getting confused with the wording of the question and have
          thought that there are some grammatical mistakes here. Always remember
          guys, UPSC never does grammatical mistakes. If you’re not getting the
          question, it is your concern.
        </ListItem>
        <ListItem>
          If you read this part carefully, then you will come to know that, this
          part asks you to CRITICALLY EVALUATE the requirement of AFSPA by
          giving references of the views held by apex court.
        </ListItem>
        <ListItem>
          EVALUATE means you need to identify both for and against arguments of
          an issue. In this particular question, you need to argue whether AFSPA
          is required or not. This means you need to throw some arguments in
          favour as well as in opposition of AFSPA.
        </ListItem>
        <ListItem>
          As we have already mentioned, the objectionable sections of AFSPA in
          the first part of main body, there is no need to mention negatives of
          AFSPA separately here.
        </ListItem>
        <ListItem>
          In short, in second part of the main body you need to explain why
          AFSPA is required.
        </ListItem>
        <ListItem>
          You can either give views of Supreme Court while explaining the
          requirement of AFSPA or you can separately mention them. Question does
          not ask you to critically evaluate Supreme Court’s views. They can be
          used just for supplementary purpose and to support your arguments.
        </ListItem>
        <ListItem>
          Question also asks you to do evaluation CRITICALLY. This means that
          you need to give your concrete opinion. Your opinion can become part
          of the conclusion for this answer.
        </ListItem>
        <ListItem>
          You can make use of various committees in support of your opinion.
          But, your opinion should be loud and clear. It should not be
          ambiguous. Here, you need to give your opinion upon whether AFSPA is
          required or not.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay40() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was based on various terrorist activities and the role
        of over-ground workers (OGWs) in assisting them. Question further asks
        you to suggest measures in neutralising the influence of 0GWs. Let’s
        discuss about today’s question,
      </GeneralTextContainer>
      <ReqNotReqContainer>What was not required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          No need to explain the leading statement. Don’t explain why a
          particular terrorist organisation is banned in Jammu and Kashmir.
        </ListItem>
        <ListItem>
          Don’t explain why people fall prey to terrorist activities.
        </ListItem>
        <ListItem>
          Don’t explain the reasons behind generation of OGWs.
        </ListItem>
      </ListContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with a greater context around the question. Here,
          the context revolves around role played by OGWs in terrorist
          activities.
        </ListItem>
        <ListItem>
          Many of you are directly starting your answer by citing the example of
          Pulwama attack. As we have discussed earlier, don’t directly jump into
          the example in the beginning. Let the examiner know that you have
          understood the context of the question properly.
        </ListItem>
        <ListItem>
          In this particular question, the core context is OGWs. There is
          difference between overground workers, sleeper cells and terrorists.
        </ListItem>
        <ListItem>
          In your start, let the examiner know that you have exactly understood
          the meaning of OGWs and you are not going to mix them up with sleeper
          cells and terrorists. In short, define OGWs in the start.
        </ListItem>
        <ListItem>
          In first part of the main body, explain the role played by OGWs in
          assisting terrorist organisations in insurgency affected areas.
        </ListItem>
        <ListItem>
          While explaining the role, it is always expected to give specific
          examples of such incidences. If you are not giving examples, then your
          points sound vague and superficial.
        </ListItem>
        <ListItem>
          In the second part of the main body, you have to discuss the measures
          to neutralise the influence of OGWs.
        </ListItem>
        <ListItem>
          Many of you are giving measures to tackle terrorist activities and
          terrorism. Question specifically asks you to mention measures which
          can neutralise OGWs. There is subtle difference between these two.
        </ListItem>
        <ListItem>
          While giving such measures, again using an example or a case study is
          good idea.
        </ListItem>
        <ListItem>
          In the conclusion, you can provide specific government measures or
          initiatives or schemes which can be helpful in neutralising OGWs. You
          can add this part two main body itself. But, we would suggest to
          mention it separately as government measures are the most important
          thing in neutralising OGWs. So rather than mentioning them, under
          separate headings, we can include them into the conclusion.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay41() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was based on separation of powers. It was demanding us
        to explain that India is not having strict separation of powers rather
        it has certain checks and balances. Today we have shifted from GS-3 to
        GS-2. And accordingly we also need to shift our approach of writing.
        Let’s discuss about today’s question,
      </GeneralTextContainer>
      <ReqNotReqContainer>What was not required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Don’t explain why strict separation of power is not exercised in
          India.
        </ListItem>
        <ListItem>
          Don’t explain the rationale behind checks and balances.
        </ListItem>
        <ListItem>
          Don’t explain the challenges in implementing strict separation of
          powers.
        </ListItem>
        <ListItem>
          Don’t explain the drawbacks of checks and balance system.
        </ListItem>
      </ListContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with a greater context around the question. Here,
          the context revolves around the principle of separation of power.
        </ListItem>
        <ListItem>
          Whenever you are starting any answer based on Constitution, always
          mention some constitutional provisions or articles or court cases in
          the start itself. In this particular answer, mentioning of Article 50
          of DPSP or reference of any court case is expected.
        </ListItem>
        <ListItem>
          Main body demands you to give your opinion about whether Constitution
          of India accepts the principle of strict separation of power or not.
        </ListItem>
        <ListItem>
          Never give your opinion at the beginning of main body immediately. Any
          rational mind will give the opinion only after analysing the all
          angles around the issue. If you are directly giving opinion in the
          beginning itself, it shows shallowness of thinking.
        </ListItem>
        <ListItem>
          Hence, in the first part of Main body, talk about the provisions of
          the Constitution mentioning separation of power.
        </ListItem>
        <ListItem>
          In the next part of main body, mention the provisions showing
          evidences of checks and balances.
        </ListItem>
        <ListItem>
          Finally in the conclusion give your opinion clearly.
        </ListItem>
        <ListItem>
          This question demands heavy content and requires you to write as many
          points as you can, but within stipulated word, space and time limit.
          Hence, a wise use of illustration is advisable while writing the
          answer.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay42() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was based on 69th Constitutional amendment and its
        consequent impact on the relationship between elected representatives
        and Lieutenant Governor in union territory of Delhi. The question was
        lengthy and was bit difficult to decipher. But once you decipher it
        properly, our writing task becomes easy. Let’s discuss about today’s
        question,
      </GeneralTextContainer>
      <ReqNotReqContainer>What was not required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Don’t explain the need, benefits and drawbacks of 69th Constitutional
          amendment.
        </ListItem>
        <ListItem>
          Don’t just keep on explaining the conflicts between elected
          representatives and Lieutenant Governor in Delhi. Crux of the question
          is not on conflicts, it is on anomalies.
        </ListItem>
        <ListItem>Don’t provide solution to these anomalies.</ListItem>
        <ListItem>
          Don’t explore the angle of Centre-state relations and federalism.
        </ListItem>
        <ListItem>
          No need to explain before and after situation regarding 69th
          Constitutional Amendment act.
        </ListItem>
        <ListItem>Don’t unnecessarily list down Court verdicts.</ListItem>
      </ListContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. Here
          the context revolves around the 69th Constitutional amendment and
          anomalies created by it.
        </ListItem>
        <ListItem>
          First part of the main body demands you to mention essentials of 69th
          Constitutional amendment act.
        </ListItem>
        <ListItem>
          Here essentials mean features of the act. There is difference between
          essentiality and essentials. Essentiality means need or necessity
          while essentials mean provisions or features. Many of you have blindly
          followed the online material and have messed up the first part.
          Whenever you face such difficulty in real exam, you can refer Hindi
          translation of the question.
        </ListItem>
        <ListItem>
          Second part of the main body needs you to explain the anomalies that
          have led to conflicts between elected representatives and Lieutenant
          Governor.
        </ListItem>
        <ListItem>
          Many of you are writing about the conflicts. But if you read the
          question carefully, you will come to know that question demands you to
          discuss the anomalies which have led to the conflicts and not
          conflicts directly.
        </ListItem>
        <ListItem>
          Here, you need to find out the anomalies between 69th Constitutional
          commitment act and Union Territories act. Unfortunately, not a single
          answer is throwing light on this aspect.
        </ListItem>
        <ListItem>
          While doing so, you can give references to the current happenings.
          Giving reference to the present GNCTD 2021 bill is always a good sign.
          But don’t start your answer directly with the current events.
        </ListItem>
        <ListItem>
          In the end, you can give your opinion whether, these conflicts and
          anomalies are giving rise to new trend in functioning of Indian
          federal politics or not as a conclusion. Your conclusion should be
          clear and well understandable to the examiner.
        </ListItem>
        <ListItem>
          You can also provide apex court‘s judgements while explaining your
          main body but don’t categorise it separately under Supreme Court‘s
          view
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay43() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was based on parliaments power to amend the
        constitution. Today we had one leading statement and one interrogative
        statement. Both of these statements were making the same point. Hence
        many of you got confused while writing the answers and we saw multiple
        repetition of similar points. Let’s discuss about today’s question,
      </GeneralTextContainer>
      <ReqNotReqContainer>What was not required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          No need to explain in detail the components of basic structure
          doctrine.
        </ListItem>{" "}
        <ListItem>
          Don’t explain how basic structure doctrine is evolved.
        </ListItem>{" "}
        <ListItem>
          No need to criticise the amending power of the Parliament.
        </ListItem>{" "}
        <ListItem>
          Don’t unnecessarily list down various court cases. They are needed but
          accommodate them while explaining the main body. Dont make separate
          structure for it.
        </ListItem>
      </ListContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. Here
          the context revolves around the scope of parliament’s power to amend
          the constitution.
        </ListItem>
        As we have discussed earlier, it is always advisable to start your
        answer by giving specific constitutional provisions and articles in the
        beginning.
        <ListItem>
          Now comes the main body which is the most challenging one. It is not
          difficult because of the content. Poor understanding of the demand of
          the question makes it tough to handle. Here, main body is divided into
          three broader compartments.
        </ListItem>{" "}
        <ListItem>
          First compartment demands you to mention parliament’s power to amend
          the constitution. You need to throw some light on certain provisions
          of Constitutional amendment procedure like, simple majority, special
          majority, special majority with the consent of states etc.
        </ListItem>{" "}
        <ListItem>
          Second compartment demands you to throw light on the limitations of
          parliament’s amending power while dealing with basic structure. Here
          you can mention court cases and their verdicts to justify your
          arguments.
        </ListItem>{" "}
        <ListItem>
          Almost 90% of the answers received today are ending at this point.
          Third compartment is the hidden one and forms the core of this answer.
          If it is not there in your answer, then automatically you are going to
          lose marks.
        </ListItem>{" "}
        <ListItem>
          You can explore this core by carefully reading the question,
          especially the leading statement. Leading statement clearly mention is
          that “**parliament’s power to amend the Constitution cannot be
          enlarged into absolute power.**” And then your actual question starts
          by stating that “**in the light of this statement**”. This means that
          we need to take care of leading statement as well while writing your
          main body.
        </ListItem>{" "}
        <ListItem>
          In short your main body should contain the component of, why
          parliament’s amending power cannot be enlarged. And this is the third
          compartment of your structure.
        </ListItem>{" "}
        <ListItem>
          You can use multiple headings while writing this third compartment,
          like, importance or significance of basic structure, why parliament’s
          power cannot be absolute, why Parliament has limited power, whether
          Parliament’s present limited power of amendment is good or bad and so
          on.
        </ListItem>{" "}
        <ListItem>
          In the end, conclude your answer by providing some current incidences
          where certain bad practises in Parliament may affect basic structure
          in short and long term.
        </ListItem>{" "}
        <ListItem>
          Many of you are confused while structuring your answers in GS2. Some
          of you are writing in paragraph format while some are writing in point
          format. Rather than getting confused into paragraphs and points, we
          can use a simple thumb rule here. While writing your answers in GS,
          write your content under headings and subheadings. As long as you are
          giving proper headings and sub-headings it doesn’t matter much whether
          you are writing in point format or paragraph format below that.
        </ListItem>{" "}
        <ListItem>
          If you are writing entirely in paragraph format without giving
          headings and sub-headings, then this is a clear indication that you
          have not understood the question properly and your thoughts have been
          messed up. And this has happened with almost 90% of the answers today.
          Examiner can catch you by just looking at your structure. So be smart
          guys. Write less but write with precision.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay44() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was based on federalism practised on Indian political
        landscape. Question was asking you to find out the flaws in present
        system of federalism and up to what extent cooperative federalism can
        provide solution to it. Prima facie, question looks straightforward one
        but it has one important hidden aspect. And 99% of answers received
        today have missed this aspect. Wording of the question is very
        straightforward one hence, hardly any answer has missed the focus. So
        rather than discussing what was not required, we will directly jump into
        what was required part. Let’s discuss about today’s question,
      </GeneralTextContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. Here
          the context revolves around the federalism. You can either start with
          the definition or specific constitutional provision/article.
        </ListItem>
        <ListItem>
          There is no need to explain what cooperative federalism is, in detail.
          Because it is the part of the leading statement.
        </ListItem>
        <ListItem>
          First part of the main body asks you to highlight the drawbacks in the
          existing structure of federalism. Many of you are writing that,
          existing structure of federalism is cooperative federalism. It is not
          true guys. We are aiming to achieve cooperative federalism, we dont
          have it as of now. Don’t make such conceptual blunders.
        </ListItem>
        <ListItem>
          While mentioning the drawbacks you need to provide some examples and
          case studies.
        </ListItem>
        <ListItem>
          Also, Instruction word here is HIGHLIGHT. Highlight means you just
          need to List down the points and there is no need to explain them in
          detail.
        </ListItem>
        <ListItem>
          Next part of the main body demands you to discuss, upto what extent
          cooperative federalism will provide answers to these shortcomings.
          Many of you have missed the word EXTENT.
        </ListItem>
        <ListItem>
          It means, upto certain extent cooperative federalism can overcome
          these shortcomings and beyond that cooperative federalism cannot be
          much useful. In short, you need to mention limitations or challenges
          associated with cooperative federalism as well.
        </ListItem>
        <ListItem>
          If you are just mentioning how cooperative federalism is helpful in
          overcoming these shortcomings, then your answer is one-sided one.
        </ListItem>
        <ListItem>
          Conclude your answer by providing way forward to overcome these
          limitations of cooperative federalism.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay45() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was based on local self governance and hurdles in its
        effective functioning in light of absence of well educated
        representatives and organised system. Question was very specific one and
        demands you to focus on these two aspects only. We received plethora of
        interpretations for today’s question. We are almost done with 250 copies
        as of now but not more than five answers are hitting the demand. Many of
        you have caught the word “local self governance” and have kept on
        writing around it without paying due attention towards the exact
        requirement of the question. Hence, rather than going for what was not
        required, we are directly jumping into what was required part. Let’s
        discuss about today’s question,
      </GeneralTextContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. The
          context of this question revolves around the ineffectivity of local
          level government system due to illiteracy of members and poor
          organisation.
        </ListItem>
        <ListItem>
          In the start, you can mention what local self governance is, along
          with specific constitutional provisions and amendments. Also, in the
          start itself mention the basic motive of local self governance and how
          certain issues have converted it into a mere political institution and
          not an effective instrument of governance.
        </ListItem>
        <ListItem>
          Many of you have spent almost an entire page in describing the essence
          of local self governance. It is necessary while explaining the main
          body but it is not the core focus of the question.
        </ListItem>
        <ListItem>
          After reading the question carefully we can decipher the crux in
          following manner, basic motive of local self governance, Impact of
          Absence of well educated representatives and organised system, This
          impact restricts local self government system to petty political
          institutions and ineffective instruments of governance (how it defeats
          the core motive of PRIs)
        </ListItem>
        <ListItem>
          Hence, in the first part of your main body, you are supposed to write
          the impact of absence of well educated representatives on local level
          government system.
        </ListItem>
        <ListItem>
          After that you are supposed to write the impact of poor organisation
          on local self government system.
        </ListItem>
        <ListItem>
          Question asks you to CRITICALLY DISCUSS. In Discuss part, mostly, you
          need to support the statement. At the same time, some light should be
          thrown on the aspect that, there are other reasons as well apart from
          absence of well educated representatives and poor organisation which
          make local self government system mere political institution and
          ineffective instrument of governance.
        </ListItem>
        <ListItem>
          In short, in Discuss you need to give 80% of your arguments in the
          support of the statement and 20% in opposition.
        </ListItem>
        <ListItem>
          In CRITICALLY part, you need to give your opinion clearly. Here
          opinion should be, “Yes, in absence of well educated representatives
          and well organised system, PRIs have remained largely ineffective.”
        </ListItem>
        <ListItem>
          In conclusion, suggest way forward or solutions to overcome this
          issue. While giving solutions, please do thorough brainstorming. Many
          of you are blindly suggesting to put education criteria for the
          elections of PRIs. This shows shallow thinking guys. Try to avoid it.
        </ListItem>
        <ListItem>
          Today we have received answers with multiple interpretations and hence
          evaluation is taking more time than usual. Please be patient, if
          submitted within the deadline, your evaluated copy will be returned to
          you soon.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay46() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was very straightforward one. It was based on financial
        emergency. It was directly asking you to write about circumstances under
        which financial emergency can be proclaimed and its consequences. There
        are no twists in this question and it is purely based on content. UPSC
        asks such straightforward questions in GS-2 where, they check your
        factual accuracy. Even if you are having less content to write such
        answers, you need to be factually correct. Hence rather than going into
        what was not required part we will directly jump into what was required
        aspect. Let’s discuss about today’s question,
      </GeneralTextContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. The
          context of this question revolves around the financial emergency.
        </ListItem>
        <ListItem>
          As directive word in the question is WHAT, you can directly start with
          the definition of financial emergency. It is always advisable to
          mention article 360 while doing so.
        </ListItem>
        <ListItem>
          First part of the main body expects you to mention circumstances under
          which financial emergency can be proclaimed by President of India.
          This is a straightforward one and you just need to list down various
          circumstances.
        </ListItem>
        <ListItem>
          As we have not experienced such situation yet, hence, we cannot
          provide examples and case studies here.
        </ListItem>
        <ListItem>
          Don’t unnecessarily relate this question to current events. During our
          preparation, our thought process has been moulded in such a way that,
          everything we see in Question Paper, we tend to relate it to current
          events. This is not true guys. UPSC asks certain questions out of the
          blue which does not have any link to current events. This question was
          asked in 2018 and there was no financial stressful situation in the
          country. Similarly in 2019 UPSC has asked question on attorney
          general. Don’t fall prey to such misleading current event approach.
        </ListItem>
        <ListItem>
          In the second part of the main body, you need to mention consequences
          during the enforcement of financial emergency.
        </ListItem>
        <ListItem>
          Many of you are writing long-term consequences. Questions specifically
          asks you to mention consequences only for the period for which
          declaration is in force.
        </ListItem>
        <ListItem>
          Also many of you were just mentioning the provisions of financial
          emergency. Question asks you to write consequences and not provisions.
          Hence you need to look beyond salary cuts and money bills.
        </ListItem>
        <ListItem>
          You can conclude this answer in multiple ways. If you ask us, we will
          suggest you to conclude by mentioning the preventive measures need to
          be taken, so that there won’t be any circumstances which can give
          birth to financial emergency.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay47() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was based on privileges of the Members of Parliament.
        Question demands you to assess the reasons for the absence of legal
        codification of these privileges and how this can be further improved.
        Today’s question was very lengthy, as it has very big leading statement.
        But if you read question carefully, you will come to know that, this
        question is straightforward similar to yesterday’s one. Generally it has
        been observed in UPSC, whenever question contains more words it has less
        twists. Let’s discuss about today’s question,
      </GeneralTextContainer>
      <ReqNotReqContainer>What was not required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          No need to explain in detail about parliamentary privileges.
        </ListItem>
        <ListItem>
          Don’t explain the sources of these privileges and how they have
          evolved.
        </ListItem>
        <ListItem>
          Don’t unnecessarily bring in state legislature privileges here.
        </ListItem>
        <ListItem>
          Don’t explain in detail the purpose of Parliamentary privileges. The
          question is on codification of privileges and not on privileges in
          general.
        </ListItem>
      </ListContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. Here
          the context revolves around the privileges of the Members of
          Parliament.
        </ListItem>
        <ListItem>
          In the start, you can mention the basic purpose of privileges along
          with constitutional provisions. If word and space limit permits you
          can mention some of the sources of these privileges as well. But
          remember guys, in any situation your start should never go beyond 30
          to 35 words.
        </ListItem>
        <ListItem>
          First part of the main body asks you to ASESS THE REASONS for
          non-codification of privileges. Many of you have just mentioned the
          reasons for absence of legal codification. You not only need to
          mention the reasons but further need to assess them also
        </ListItem>
        <ListItem>
          Assessment means you need to throw light on whether these reasons for
          non-codification are justifiable or not. This is the most crucial part
          of this question.
        </ListItem>
        <ListItem>
          In the second part of the main body, you need to provide a way forward
          as privileges have been largely misused
        </ListItem>
        <ListItem>
          It becomes difficult to accommodate all these aspects within
          stipulated word and space limit. Using an illustration can be a good
          option here.
        </ListItem>
        <ListItem>
          In conclusion either you can provide some international practises or
          you can strike a balance between fundamental rights of citizens and
          Members of Parliament.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay48() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was based on judicial review. It was a straightforward
        question, hence we’ll directly jump into what was required part. We have
        received record number of answers today. That’s why we are late in group
        feedback, sincere apology from our side for the same. Let’s discuss
        about today’s question,
      </GeneralTextContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. Here,
          the context of the question revolves around the judicial review. You
          can mention some constitutional articles which explicitly mention
          provisions for judicial review.
        </ListItem>
        <ListItem>
          First part of the main body asks you to mention crux of the IR Coelho
          case. Here, you don’t need to write all minute details of the case.
          Just portray the overall summary.
        </ListItem>
        <ListItem>
          Next part of the main body asks your opinion regarding importance of
          judicial review among all other basic features of the Constitution.
        </ListItem>
        <ListItem>
          Many of you are just writing about how judicial review is important
          and what are its benefits. But friends, question clearly asks your
          opinion and we don’t give our opinion unless and until we analyse both
          sides of the issue.
        </ListItem>
        <ListItem>
          Hence here also you need to throw light on dark side of judicial
          review. Or simply you need to mention the obstructions created by
          judicial review.
        </ListItem>
        <ListItem>
          In the end, give your opinion over the importance of judicial review.
        </ListItem>
        <ListItem>
          Judicial review is must to check the arbitrariness of the legislature
          and to adhere the ethos of constitutionalism. Hence while concluding,
          you can mention some of the steps needed to be taken so that judicial
          review provision will not take the shape of judicial overreach and
          judicial hyper-activism.
        </ListItem>
        <ListItem>
          It is always advisable to mention some of the relevant court cases as
          an example or case study.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay49() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was based on Indian party system and its transition,
        which reflects contradictions and paradoxes. This particular question
        can be linked with Pressure Groups, an important yet ignored topic of
        the syllabus. Political party is a form of formal pressure group. Let’s
        discuss about today’s question,
      </GeneralTextContainer>
      <ReqNotReqContainer>What was not required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Dont discuss about rise and fall of particular political party.
          Question is on party system and not on individual parties.
        </ListItem>{" "}
        <ListItem>
          Dont portray any political party in negative tone. This will reflect
          your ideology and examiner looks for impartiality.
        </ListItem>{" "}
        <ListItem>Dont explain the problems of political parties.</ListItem>{" "}
        <ListItem>
          Dont examine the pros and cons of this transition separately in
          detail.
        </ListItem>
      </ListContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. Here
          the context revolves around the political party system in India.
        </ListItem>{" "}
        <ListItem>
          Don’t unnecessarily bring in any constitutional article here. Rather
          you can mention the core ethos of party system in India like
          constitutionalism, democratic spirit, unity of the nation etc. in the
          start.
        </ListItem>{" "}
        <ListItem>
          In the first part of the main body throw light on transition of
          political parties in contemporary times. You can show transition since
          independence as well.
        </ListItem>{" "}
        <ListItem>
          In second part of the main body, DISCUSS how this transition is full
          of contradictions and paradoxes. Here contradictions and paradoxes can
          be used interchangeably.
        </ListItem>{" "}
        <ListItem>
          Many of you have not understood the meaning of paradoxes and are also
          getting confused while writing contradictions. Indian political sphere
          has certain ethos like constitutionalism, democratic spirit,
          maintaining the trust of the people, maintaining unity of the nation,
          etc.
        </ListItem>{" "}
        <ListItem>
          Earlier, political parties used to adhere to these ethos. But in
          recent times, due to transition in political party system, they are
          contradicting with these ethos due to multi-party system, lack of
          intra-party democracy, person centric parties etc.
        </ListItem>{" "}
        <ListItem>
          Here DISCUSS means, 80% of your arguments should go in support of the
          statement, that is, supporting the contradictions. While, 20% should
          go against it, that is, explaining how it is not contradicting.
        </ListItem>{" "}
        <ListItem>Give solution to the problem in the conclusion.</ListItem>{" "}
        <ListItem>
          You can use examples while writing but dont go into controversial
          aspect. Many of you are mentioning Dynasty in Congress party and Modi
          Wave. Avoid such arguments.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay50() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was based on size of the cabinet and its relation with
        the efficacy of the government. In short, question revolves around the
        principle, minimum government-maximum governance. Let’s discuss about
        today’s question,
      </GeneralTextContainer>
      <ReqNotReqContainer>What was not required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Don’t explain the functions of Cabinet and Prime Minister in brief.
        </ListItem>
        <ListItem>
          Don’t explain how Prime Minister manages the cabinet.
        </ListItem>
        <ListItem>
          Don’t link it to recent reshuffling of Cabinet. Avoid using the names
          of particular political party and leader.
        </ListItem>
      </ListContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. Here
          the context revolves around the size of Cabinet and its direct
          relation with governance.
        </ListItem>
        <ListItem>
          While doing so you can mention constitutional provisions regarding
          cabinet and its functioning. Also you can mention 91st amendment which
          has bearing on the size.
        </ListItem>
        <ListItem>
          Main body is bit confusing to frame a proper structure. If you read
          the question carefully, you can interpret it in following way, “Size
          of cabinet inversely related to efficacy of a government” :- this
          means large cabinet-poor efficacy and small cabinet-better efficacy.
        </ListItem>
        <ListItem>
          Hence, in the first part of main body you need to mention drawbacks of
          large cabinet and benefits of small cabinet.
        </ListItem>
        <ListItem>
          But the question asks you HOW FAR. This means, too small cabinet may
          lead to poor efficacy of government.
        </ListItem>
        <ListItem>
          In the conclusion you can say that, for better efficacy of the
          government, size of cabinet should not be either too small or too
          large.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay51() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was revolving around anti-defection law and its impact
        on smooth and qualitative functioning of the legislature. Question was
        straight forward one, but over-reliance on M. Laxmikanth only, for GS-2
        and poor content has made this question too challenging to handle. Due
        to Lack of content, we hardly came across any answer talking too much
        about the issue. Hence, rather than going into what was not required
        part, we’ll directly jump into what was required aspect. Let’s discuss
        about today’s question,
      </GeneralTextContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. The
          context of this question revolves around the anti-defection law, its
          earlier intention and how this intention has been sidetracked giving
          birth to poor performance of MPs in the parliament.
        </ListItem>
        <ListItem>
          You can mention 52nd constitutional amendment in the beginning. At the
          same time you can mention the intention of anti-defection law.
        </ListItem>
        <ListItem>
          In first part of the main body, write about how anti-defection law has
          attributed to poor performance of MPs in the Parliament. Many of you
          are finding it difficult to put your thoughts into words in this
          particular section.
        </ListItem>
        <ListItem>
          In simple terms, here you have to write drawbacks of anti-defection
          law. And how these drawbacks have reduced the responsibility, leading
          to poor performance of individual MPs
        </ListItem>
        <ListItem>
          At the same time friends, take care of directive word HOW FAR. This
          means that up to certain extent anti-defection law is responsible for
          poor performance of individual MPs but beyond that there are another
          reasons behind this as well.
        </ListItem>
        <ListItem>
          In short, in second part of your main body, you need to throw light on
          other reasons for performance of MPs.
        </ListItem>
        <ListItem>
          In conclusion, provide solution to this phenomena. While providing
          solutions in polity, it is always better to mention references. For
          example, you can provide solutions given by 2nd ARC.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay52() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was based on jurisdiction of tribunals and ordinary
        courts. This particular question can be linked with the core topic of
        the syllabus, dispute redressal mechanisms and institutions. Again this
        topic is the most ignored one. Sometimes we almost forget that there is
        a chapter named Tribunal in M. Lakshmikanth, because all our energy gets
        exhausted until we reach to this part of the book. Although it is the
        most ignored one by aspirants, UPSC has asked two questions on it till
        the date. As we have very limited knowledge about the topic, almost no
        one has written much today. Hence rather than going for what was not
        required part, we’ll directly jump into what was required stuff. Let’s
        discuss about today’s question,
      </GeneralTextContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. The
          context of this question revolves around the jurisdiction of tribunal
          and ordinary courts.
        </ListItem>
        <ListItem>
          In the start, you can mention constitutional provisions having mention
          of tribunal. Also, you can mention the mandates of tribunals in short
        </ListItem>
        <ListItem>
          The main body of this question is bit lengthy and has many
          subdivisions in it.
        </ListItem>
        <ListItem>
          First part of the main body demands you to write, how tribunals
          curtail the jurisdiction of ordinary courts.
        </ListItem>
        <ListItem>
          As the question demands HOW FAR from you, you need to throw some light
          on how tribunal cannot overtake the jurisdiction of ordinary courts.
          You can mention the verdict of Chandra Kumar case here.
        </ListItem>
        <ListItem>
          Next part of the question is straightforward one. First you need to
          write about constitutional validity and then competency of tribunals.
        </ListItem>
        <ListItem>
          Constitutional validity does not only mean giving constitutional
          articles. Whenever you find any difficulty in deciphering the
          constitutional validity of any issue, you need to look beyond
          constitutional provisions. Here meaning of constitutional validity is
          equivalent to adherence to the principles of constitutionalism.
          Constitutionalism denotes multiple ethos like rule of law, democratic
          principles, separation of powers etc.
        </ListItem>
        <ListItem>
          Competency means you need to throw light on whether tribunals are
          competent enough or not. Means you need to throw some light on lacuna
          of the working of multiple tribunals vis-a-vis courts. In short you
          have to compare tribunal and ordinary courts and need to give some
          insights on whether tribunal’s are competent enough with respect to
          ordinary courts.
        </ListItem>
        <ListItem>
          In the conclusion you can mention certain measures required so that
          tribunals should not interfere or curtail the jurisdiction of ordinary
          courts.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay53() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was based on procedure of disqualification under
        Representation of Peoples act. It was comparatively flat question and
        does not have any twists in it. But RPA is not there in any conventional
        sources and hence lack of content is making this question difficult to
        tackle. Let’s discuss about today’s question,
      </GeneralTextContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answers with the greater context around the question. Here,
          question revolves around the disqualification of members.
        </ListItem>
        <ListItem>
          You can provide specific constitutional provision regarding this in
          the start.
        </ListItem>
        <ListItem>
          Main body of the answer contains multiple subparts. First talk about
          procedure for disqualification of process of persons found guilty of
          corrupt practices.
        </ListItem>
        <ListItem>
          Then you can mention the issues with this process. As you are
          mentioning issues with the current procedure, this means that we need
          a new one.
        </ListItem>
        <ListItem>
          Finally you can mention the benefits of simplification of procedure.
        </ListItem>
        <ListItem>
          In conclusion you can suggest some solutions and way forwards towards
          simplification of procedure.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay54() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was based on role, appointment and powers and functions
        of CAG. Question was lengthy today and demands you to cover multiple
        aspects within 150 words. There was very little scope to go off the
        track for today’s question, hence, we’ll directly jump into what was
        required part. Let’s discuss about today’s question,
      </GeneralTextContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. Here
          the context revolves around the CAG. You can mention specific
          constitutional articles which have provisions for CAG, in the start.
        </ListItem>
        <ListItem>
          Main body of this question covers multiple parts. In the first part
          you need to mention vital roles played by CAG. Many of you are getting
          confused in this part and are wondering why do we need to explain
          leading statement here.
        </ListItem>
        <ListItem>
          If you read the question carefully, you can notice that, question
          starts with, “Explain how this is....”. Here, “this” means vital role
          played by CAG and thus you need to mention it.
        </ListItem>
        <ListItem>
          Next part of main body demands you to write about the method and terms
          of his appointment and his range of powers. You can separate these two
          structures.
        </ListItem>
        <ListItem>
          As instruction word is EXPLAIN, you need to mention these things in
          brief.
        </ListItem>
        <ListItem>
          But friends, you’re not just supposed to explain the Appointment
          method and range of powers. Question carries another instruction word
          HOW.
        </ListItem>
        <ListItem>
          In short, question can be interpreted as, CAG has very vital role to
          play and whether his appointment methods and range of powers pay due
          justice to his role.
        </ListItem>
        <ListItem>
          Therefore, it is necessary to throw light on criticisms of methods of
          appointment and range of powers. 99% answers received today have
          missed this crucial angle.
        </ListItem>
        <ListItem>
          In the conclusion, provide Way forward to overcome these drawbacks.
        </ListItem>
        <ListItem>
          You can mention specific examples and case studies showing how faulty
          appointment procedures and ambiguity in range of power has crippled
          the functioning of CAG.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay55() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was based on overlapping functions of various
        regulatory agencies and case of their merging. If you see the question
        at the very first instance, you may think that it is taken from
        Economics part of GS-3. But SEBI and IRDA are regulatory bodies and it
        is the part of GS-2. This is another ignored part of the syllabus. Many
        of you were searching economy sources for this particular question, this
        signifies, how careless we are during our preparation for GS-2. Look
        beyond Laxmikant guys. GS-2 is much wider and deeper than it. Let’s
        discuss about today’s question,
      </GeneralTextContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. Here
          question revolves around regulatory bodies and their overlapping
          functioning, especially SEBI and IRDA.
        </ListItem>
        <ListItem>
          Here, you can not use constitutional provisions, as these bodies are
          extra-constitutional in nature.
        </ListItem>
        <ListItem>
          In the first part of main body, mention overlapping of products and
          services. For example, SEBI looks after mutual funds and sharemarket
          closely while IRDA has control over market linked ULIP insurance
          plans.
        </ListItem>
        <ListItem>
          This over lapping has led to multiple issues like, turf wars,
          difficulty in fixing the responsibilities, multiple loopholes,
          repetition of functions and redundancies etc. This you need to mention
          in the next part of main body.
        </ListItem>
        <ListItem>
          Finally mention benefits of merger, like cost saving, fixing
          responsibilities, greater control etc.
        </ListItem>
        <ListItem>
          In conclusion, you can provide measures other than merger which can
          strengthen the functioning of these sectors.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay56() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was based on SHGs and its role in promoting
        participation in development programmes. It was straight forward one but
        many of you have missed the important hidden aspect of it. Let’s discuss
        about today’s question,
      </GeneralTextContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. Here,
          context revolves around the SHGs and its role in promoting
          participation in development programmes.
        </ListItem>
        <ListItem>
          In the start, you can provide definition of SHGs along with its role
          in short.
        </ListItem>
        <ListItem>
          Many of you are writing about objectives and functions of SHGs. It is
          not required here. Generally role is somewhat similar to that of
          objectives and functions, but you need to use heading properly here.
        </ListItem>
        <ListItem>
          In the main body, you need to throw light on socio-cultural hurdles in
          smooth functioning of SHGs. Some answers have divided this part into
          social and cultural subparts and some have directly written under
          socio-cultural heading. Both approaches are fine.
        </ListItem>
        <ListItem>
          While writing hurdles, priorities do matter. Many of you are giving
          first priority to caste hierarchy and then mentioning patriarchy. In
          reality patriarchy and male domination is the biggest socio-cultural
          hurdle and it should be given first priority.
        </ListItem>
        <ListItem>
          You need to keep your concentration level intact throughout the exam
          guys. In today’s question, many of you have missed the focus in a flow
          and all of a sudden have started writing about socio-economic hurdles.
          Question was based on socio-cultural hurdles and not on socio-economic
          ones.
        </ListItem>
        <ListItem>
          Further, question contains instruction word examine. This means, you
          can throw some light on other hurdles as well.
        </ListItem>
        <ListItem>
          In the conclusion, provide way forward to overcome these hurdles.
        </ListItem>
        <ListItem>
          Mentioning of any particular example and case study is always a good
          thing to do.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay57() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was an open ended one. It was asking you to give
        suggestions to improve the status and performance of primary education
        and primary healthcare. Let’s discuss about today’s question,
      </GeneralTextContainer>
      <ReqNotReqContainer>What was not required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Dont explain Amartya Sen’s views on reforms in primary education and
          healthcare sector in detail. Reference of Amartya Sen is part of
          leading statement and we are not supposed to elaborate leading
          statement.
        </ListItem>
        <ListItem>
          Dont explain how good quality primary education and healthcare leads
          to prosperity of the society and the country.
        </ListItem>
      </ListContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. Here
          context revolves around the primary education and healthcare system of
          India.
        </ListItem>
        <ListItem>
          Many of you are giving references or Article 21 (Right to life) in the
          start. It is perfectly okay to link it in this fashion.
        </ListItem>
        <ListItem>
          Main body directly asks you to give suggestions to improve their
          status. But friends, before giving any suggestions, you need to throw
          light on issues/problems first.
        </ListItem>
        <ListItem>
          Many of you are confused over writing issues here. Let us clear this
          thing again, whenever you mention any suggestions/solutions, always
          mention issues first. There are some issues, thats why we are giving
          solutions/suggestions. If there wouldnt have been any issues, then
          there is no need to give suggestions/solutions.
        </ListItem>
        <ListItem>
          While giving suggestions, separate primary education and healthcare.
        </ListItem>
        <ListItem>
          This is content based question. More you write, more marks you’ll get.
        </ListItem>
        <ListItem>
          In conclusion, mention some government measures and specific scheme
          and initiative. Reference to any SDG is always a good thing to do.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay58() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was very lengthy one and many have lost the track while
        deciphering the question. If you read the question carefully you will
        come to know that the question was focusing on centrally sponsored
        schemes and providing flexibility to the states in better implementation
        of them. Let’s discuss about today’s question,
      </GeneralTextContainer>
      <ReqNotReqContainer>What was not required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Don’t discuss about centrally sponsored schemes in detail. You can
          mention them in the start but don’t go beyond 25 to 30 words.
        </ListItem>
        <ListItem>
          Don’t explain the benefits of centrally sponsored schemes.
        </ListItem>
        <ListItem>
          Don’t list down various centrality sponsored schemes.
        </ListItem>
      </ListContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your question with the greater context around the question.
          Context of the question revolves around the centrally sponsored
          schemes and its performance in eradicating the suffering of the
          vulnerable sections of the society.
        </ListItem>{" "}
        <ListItem>
          In the first part of Main body, discuss about issues with the present
          structure of centrally sponsored schemes, in short.
        </ListItem>{" "}
        <ListItem>
          In next part of main body, discuss about the benefits of restructuring
          or flexibility of centrally sponsored schemes in ameliorating the
          suffering of vulnerable sections of the society.
        </ListItem>{" "}
        <ListItem>
          The question asks you to EVALUATE. This means that you need to throw
          light on upto what extent flexibility or restructuring can be useful.
        </ListItem>{" "}
        <ListItem>
          In short, you need to mention about issues involved with
          restructuring.
        </ListItem>{" "}
        <ListItem>
          Instruction word of the question also contains CRITICALLY. This means
          you need to give your opinion clearly, about whether to restructure
          centrally sponsored schemes or not.
        </ListItem>{" "}
        <ListItem>
          In the conclusion, you can either give your opinion or you can provide
          measures to make centrally sponsored key schemes more effective.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay59() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was based on NGOs and their role in development work.
        This question was comparatively easier one, but flow of your answer is
        very crucial while writing this one. Let’s discuss about today’s
        question,
      </GeneralTextContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. Here,
          the context lies around the role of NGOs in development work.
        </ListItem>
        <ListItem>
          In the start, you can mention role of NGOs in developing and
          protecting the environment. Do not separately write roles, as it is
          not the major requirement of the question.
        </ListItem>
        <ListItem>
          Even if you are writing or not writing roles separately, it wont
          affect your marks in either way. But if you are writing it
          elaborately, it’ll end up in eating up your time and space. So, we’ll
          suggest you to merge them in starting paragraph itself.
        </ListItem>
        <ListItem>
          Main body of the question expects you to focus on two subparts, first
          is, how to strengthen the role of NGOs and second is, major
          constraints.
        </ListItem>
        <ListItem>
          Although question demands solution first and then problems, we need to
          modify the flow here. As we have discussed it for multiple number of
          times, we should give solutions only after discussing the problems.
        </ListItem>
        <ListItem>
          Hence, in main body, first talk about the constraints and then go for
          measures to improve their role.
        </ListItem>
        <ListItem>
          In conclusion, you can either summarise the answer or you can provide
          some examples, case studies or you can simply give government measures
          towards strengthening the role of NGOs.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay60() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was based on India’s development process and need of
        cooperation and collaboration towards it. This was the lengthiest
        question we have ever tried on this platform. Generally we become very
        cautious by just seeing the length of the question. And unnecessarily we
        make such question complicated one. The same has happened today also.
        Always remember guys, lengthier the question, lesser the hidden parts in
        it. So, hold on your nerves and read the question carefully. Let’s
        discuss about today’s question,
      </GeneralTextContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. Here,
          context of the question is India’s development process.
        </ListItem>
        <ListItem>
          Almost every answer is starting with giving the context of service
          sector and its contribution in GDP. Why you guys are bringing the
          angle of GDP here?? GDP angle is the part of GS-3.
        </ListItem>
        <ListItem>
          Always try to link the question to the syllabus. You can’t find any
          reference of service sector in GS-2. Hence, focus on it will lead to
          missing context in your answer.
        </ListItem>
        <ListItem>
          Question contains very big lengthy statement, “The need......team
          spirit”. Actual question starts after that and asks you to examine
          India’s Development process.
        </ListItem>
        <ListItem>
          In this flow, many of you have explained India’s development process.
          Question is not asking you to mention India’s development process, you
          need to examine it. Means you need to find achievements and lacunae in
          India’s development process.
        </ListItem>
        <ListItem>
          After finding the lacunae, we need to give solution also. Here, the
          wording “In this light” comes into the picture. You need to give
          solution as, cooperation, partnerships and collaborations among
          various service sectors.
        </ListItem>
        <ListItem>
          In short, your mains body should be divided into,India’s development
          process Lacunae, How cooperation, partnerships and collaborations
          among various service sectors will help in overcoming these
          lacunae,Certain limitations of cooperation (as question contains
          Examine)
        </ListItem>
        <ListItem>
          In conclusion, provide suggestions to achieve this cooperation.
        </ListItem>
        <ListItem>
          You can provide case study and examples to support your arguments.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay61() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was based on Poverty and Hunger and performance of
        government in alleviating them. Question was straightforward one and
        does not carry any hidden aspect in it. Lets discuss about today’s
        question,
      </GeneralTextContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question and
          context of the question revolves around status of poverty and hunger
          in India.
        </ListItem>
        <ListItem>
          Providing any data/fact/report is an excellent way to start this
          answer. Give references to both poverty and hunger in the start. Dont
          just mention that ne among these.
        </ListItem>
        <ListItem>
          Dont explain how poverty and hunger are biggest challenges to the
          governance, in detail. It is an leading statement and hence should not
          be explained elaborately.
        </ListItem>
        <ListItem>
          Question asks you to Evaluate successive government’s performance in
          dealing with these issues.
        </ListItem>
        <ListItem>
          Before going into the evaluation part, mention various steps taken by
          successive governments. You can start tracing these steps since
          independence. But dont keep on listing them beyond 30-50 words, as
          question asks you to evaluate and not to enlist.
        </ListItem>
        <ListItem>
          Evaluation means mention successes and failures of these measures. In
          short, you need throw light of bright side as well as lacunae of these
          measures.
        </ListItem>
        <ListItem>
          In the last part of the main body suggest suitable measures. Many of
          you are suggesting government measures here. You need to explore
          measures beyond government here.
        </ListItem>
        <ListItem>
          In conclusion, you can either summarise the answer or you can link it
          to SDGs. Conclusion is very much open ended one in this question.
        </ListItem>
        <ListItem>
          While writing this answer, mentioning any case study/example/data is
          definitely going to give you 1/2 mark extra.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay62() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was based on transparency and accountability in India.
        This topic is overlapping with that of GS-4 (Ethics), and many of you
        have given GS-4 angle to this question and ultimately have ended up in
        losing marks. This is plain question and answer it in GS-2 way. Question
        is very lengthy and has many direct aspects in it. Rather than putting
        more content, covering all aspects will give you more marks here.
      </GeneralTextContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start you answer with the greater context around the question. Here
          the context is transparency.
        </ListItem>
        <ListItem>
          You dont have think much about start here. It has already been
          provided in the question itself. You can directly mention the standing
          of India in Transparency International’s Integrity Index.
        </ListItem>
        <ListItem>
          Main body has four distinct parts of causes of decline of public
          morality in India. As per the question, you have to focus only on
          Legal, Political, Social and Cultural Factors.
        </ListItem>
        <ListItem>
          Many of you got carried away with the word Transparency and went on
          writing about reasons behind corruption. Question is not on
          corruption, it is on public morality.
        </ListItem>
        <ListItem>
          Provide examples and case studies to substantiate your causes.
        </ListItem>
        <ListItem>
          In conclusion, provide solutions/way forward. You can also add
          specific government measures to overcome this menace.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay63() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question links with e-governance topic of the syllabus and asks
        you to throw light on issues and solutions of e-governance. We have lot
        of information around this topic and question was relatively straight.
        Resultantly, we have received multiple model answers today. But still,
        better structuring, which can accommodate maximum points/content, plays
        crucial role here.
      </GeneralTextContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. Here,
          context revolves around e-governance.
        </ListItem>
        <ListItem>
          No need to go in the details of benefits of e-governance. Just mention
          them in the start.
        </ListItem>
        <ListItem>
          First part of main body asks you to write about issues associated with
          e-governance.
        </ListItem>
        <ListItem>
          To accommodate more points you can divide this part into,
          technological, political, administrative, social etc.
        </ListItem>
        <ListItem>
          In the next part of main body, you need to write about measures for
          their effective implementation.
        </ListItem>
        <ListItem>
          Conclude your answer either by summarising the answer or by providing
          specific government measures/initiatives.
        </ListItem>
        <ListItem>
          This type of question is comparatively easier and everyone knows
          everything around the issue. To fetch better marks than your fellow
          competitors, you need to decorate your answer with examples and
          specific case studies.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay64() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was based on multilevel planning. Question starts with
        the wording, “neo-liberal paradigm of developmental planning”. Many of
        you got confused with these wordings, as such terminologies are not
        there in our conventional readings. If you read the question carefully,
        you will come to know that these wordings are just to divert your
        attention and main focus was on multi-level planning. Let’s discuss
        about today’s question,
      </GeneralTextContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. Here,
          the context revolves around multi-level planning which is also called
          as neo-liberal paradigm of developmental planning process.
        </ListItem>
        <ListItem>
          If you know the exact meaning of neo-liberal paradigm, then it becomes
          very easy to start your answer. Even if you don’t know the exact
          meaning, then also it is okay. Simply, you can mention the issues with
          conventional methods of planning and why multilevel planning is
          required.
        </ListItem>
        <ListItem>
          Whenever you come across NEO word before any concept, it means
          contemporary adjustments, keeping the core intact. For example,
          neo-capitalism. Neo-capitalism means core ethos of capitalism have
          remained same, but it has taken new form in terms of economic
          imperialism and debt diplomacy, as done by USA during cold war era and
          is being done by China now.
        </ListItem>
        <ListItem>
          Similarly, neo-liberalism means, liberal to its core, giving freedom
          to do things with modern perspective. This is nothing but multi-level
          planning.
        </ListItem>
        <ListItem>
          In main body, first mention issues with conventional planning
          processes. You can use specific examples/case studies/data/report
          here.
        </ListItem>
        <ListItem>
          After that, mention the benefits of multi-level planning process. Give
          special focus on its role in making operations cost effective and in
          removing implementation blockages. Again, use of examples and case
          studies is advisable here.
        </ListItem>
        <ListItem>
          In the end of main body, you can mention hurdles in implementing
          multi-level planning. Here you can throw light on some drawbacks of it
          as well.
        </ListItem>
        <ListItem>
          In the conclusion, provide suitable measures and government
          steps/initiatives in this regard.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay65() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        First of all apologies for the delay in feedback. But its always better
        than never. And after the evaluation we are here with detailed feedback
        along with model answers. Yesterday’s question was based on role of
        civil services in general and their role in Indian democracy in
        particular (which is also a topic of the syllabus). Question was asking
        your opinion on whether drastic reforms are required in civil services
        or not.
      </GeneralTextContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your context with the greater context around the question. Here,
          context revolves around the role of civil services in Indian
          democracy.
        </ListItem>
        <ListItem>
          Many of you are treating first statement of the question as leading
          statement. Actually it is not. If you treat this statement as leading
          one, then you are left with just one thing in main body, that is,
          whether the drastic reforms are required or not. This does not give
          justice to 15 marker question.
        </ListItem>
        <ListItem>
          Hence, in first part of the main body, you need to mention about
          broader role of civil services. You can take the help of goals like
          neutrality and effectivity from the question itself.
        </ListItem>
        <ListItem>
          Then talk about issues with the civil services. As question asks you
          about the reforms, this part becomes very important one. Present
          system is having some issues thats why we need reforms. And not only
          reforms, we need drastic reforms. This means that, current situation
          is rapidly on a downhill.
        </ListItem>
        <ListItem>
          After discussing the issues give your opinion. According to us, “yes,
          drastic reforms are needed looking at the vital role of civil services
          in democracy and dilapidated situation of these.
        </ListItem>
        <ListItem>
          In conclusion, mention how are we going to bring in drastic reforms.
          In short, you need to give way forward here.
        </ListItem>
        <ListItem>
          Mentioning of any specific committee reports, recommendations of 2nd
          ARC will definitely give you 1/2 mark extra.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay66() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was based on role WHO in providing global health
        security. Many of you got confused with the question and have written
        answers taking COVID as central theme. This question links to the
        International Organisation part of the syllabus and COVID-19 can be used
        as a reference here. Even if you are not having specific information
        regarding the topic, still you can answer this question. Let’s discuss
        about today’s question,
      </GeneralTextContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. Here,
          context revolves around the role of WHO in providing global health
          security.
        </ListItem>
        <ListItem>
          You can generalise the start by explaining the overall role of WHO. If
          you know any specific data/report, you can mention it as well.
        </ListItem>
        <ListItem>
          Main body of the question is quite straight forward one. In the first
          part, talk about the specific role of WHO.
        </ListItem>
        <ListItem>
          In second part, mention lacunae/loopholes of this role.
        </ListItem>
        <ListItem>
          As the question asks you to EXAMINE, mentioning these both angles are
          necessary.
        </ListItem>
        <ListItem>
          Question also asks you to examine CRITICALLY. This means you need to
          give your opinion about this role.
        </ListItem>
        <ListItem>
          In the conclusion, mention what else needs to be done to strengthen
          the role of WHO to effectively handle such unforeseen situations and
          to maintain global health security in coming future.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay67() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        If you read today’s question initially, it looks very straight one,
        asking you to mention frictions between India and USA in their
        respective policies. But if you decipher it properly, you’ll come to
        know that it was asking about dichotomies between US’ global strategy
        and India’s self esteem and ambition. Everybody has taken the shallow
        interpretation of the question and we are yet to receive a model answer
        for this question. Let’s discuss about today’s question,
      </GeneralTextContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. Here,
          the context revolves around the friction between India and USA.
        </ListItem>
        <ListItem>
          You can provide some recent examples of these frictions, like IPR
          issues, India’s stance over Palestine, Afghan Policy, Hike in Visa
          prices etc.
        </ListItem>
        <ListItem>
          Although question asks you to mention areas of frictions, you need to
          hold on to the central theme of the question.
        </ListItem>
        <ListItem>
          Central theme of the question is, USA has certain global strategy, at
          the same time India also has self esteem and ambitions. And India’s
          ambitions and self esteem are not fitting into USA’s global strategy.
          We need to throw light on this by giving examples.
        </ListItem>
        <ListItem>
          For example, Being a sovereign country India aims to have territorial
          integrity and non-interference of external players in her internal
          matters, like Jammu and Kashmir. But global strategy of USA demands
          USA to be a global leader in resolving conflicts. And this has created
          a friction.
        </ListItem>
        <ListItem>
          Another example is, USA is withdrawing her forces from Afghanistan and
          peace talks are underway. India wants an active involvement in the
          process as it has direct implications on her internal and external
          security. But peace process involved China, sidetracking India.
        </ListItem>
        <ListItem>
          Questions on IR need deep understanding of the question and you need
          to do thorough brainstorming on it.
        </ListItem>
        <ListItem>In the conclusion, you can mention a way ahead.</ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay68() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today's question was a bit straight forward. And hence, there was
        information overdose in many answers. Please take a note that, your
        answer should satisfy all the demands of the question. And hence should
        not be lopsided. Also, a good structure of an answer will fetch you
        better marks, esp. for such questions. Let’s discuss about today’s
        question,
      </GeneralTextContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. Here,
          the context revolves around evolving nature of India's relations with
          Israel.
        </ListItem>
        <ListItem>
          Then you can mention about the relations in the past, especially
          before 1992. Alternatively you can give a brief timeline of our
          relations and key achievements. Important note: Keep it short.
        </ListItem>
        <ListItem>
          The main body of the answer demands content around some key words. It
          is better if you structure your answer accordingly. (3.1) Of-late
          (means only recent examples are required) (3.2) Depth (for example,
          where both countries stood firmly with each other, like Kashmir issue,
          or our cultural ties) (3.3) Diversity (here, you can proved examples
          of all diverse domains and sectors where we have established
          relations. Try to give/connect some unique examples) (3.4) Cannot be
          rolled back (provide examples which will have a long lasting effect)
        </ListItem>
        <ListItem>Then you can mention about few areas of friction.</ListItem>
        <ListItem>In the conclusion, you can mention a way ahead.</ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay69() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today's question was also straight forward. But happy to notice a good
        structure in most of the answers. Let’s discuss about today’s question,
      </GeneralTextContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>Start with an Introduction explaining what QUAD is.</ListItem>
        <ListItem>
          Then you can mention how was QUAD in the Past. Here highlight the
          earlier focus of QUAD as Military alliance and how it was not a great
          success.
        </ListItem>
        <ListItem>
          Then you can provide reasons and evidences of its transformation into
          Trade bloc. Main points which should be covered are : the Blue Dot
          Network, COVID times and post-COVID supply chains, and Chinese
          dominance in trade and manufacturing. Include elements such as the
          increasing emphasis on securing the Sea Lanes of Communication for
          trade. Inclusion of increasing trade deals among member countries can
          also be a point of discussion.
        </ListItem>
        <ListItem>
          Along with facts like above, you can add some reasoning for How a
          military alliance makes little sense in todays world of complex
          interdependencies (You can relate with NATO). And more pressing issues
          like Climate change, terrorism, poverty etc.
        </ListItem>
        <ListItem>
          Then you can mention Challenges faces by Quad as a trade bloc.
        </ListItem>
        <ListItem>
          Provide a way forward with suggestions like need of Quad + or Quad 2.0
          etc. and conclude.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay70() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today's question specifically demanded examples. And most of you have
        given the examples. But if you are copying answers from Google or any
        other sources, please understand, with changing times, examples also
        changes. And it is important to connect current events with the
        question. Many students missed this aspect. Let’s discuss about today’s
        question,
      </GeneralTextContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with some historical reference, like role of Indians
          in Europe and America, in pre independence times. Keep it short.
        </ListItem>
        <ListItem>
          Many a students have taken the wrong meaning of the Question. And
          focusing on the historical evidences and examples of Indian diaspora.
          This may be due to blindly copying entire answer from the internet.
          Hence, please understand, it is important to read the question, decode
          it yourself, and then may be look on internet, if your understanding
          is correct or not. Most importantly, apply your own brain.
        </ListItem>
        <ListItem>
          Structure your answer in 2 parts. Politics and Economy.
        </ListItem>
        <ListItem>
          Politics - Examples from USA must include reference of Kamala Harris.
          You simply can not miss such a powerful position. Also, don't just
          mention Vice president of USA. Question has specifically asked for
          Comment with EXAMPLES. Hence, names are must. You can add reference to
          the political event for vote bank at Houston. Examples from Europe,
          should have reference to Rishi Sunak from UK. Don't forget to mention
          the pro Indian lobby in UK and most of the EU nations. Please note, we
          can not know many a names, as there is no end, but at-least one name
          from USA and Europe for both Political and Economics, is expected.
        </ListItem>
        <ListItem>
          Economics - Examples from USA must include reference of Sundar Pichai
          and Satya Nadela, along with reference to Google and Microsoft. Apart
          from this, you can mention role of Laxmi Mittal, Hinduja brothers, in
          TV channels, media and charities. For Europe, you can add few very
          less known but significant facts like, Gujarati community dominating
          in Diamond industry of Europe.
        </ListItem>
        <ListItem>
          Then in short you can mentions about few challenges faced by Indian
          Diaspora, and initiatives or solutions which will bolster our decisive
          role in USA and Europe. Keep it short.
        </ListItem>
        <ListItem>
          Conclude with Importance of such Diaspora for India, like recent
          reference of strain in relations of USA and India during Pandemic,
          successfully avoided by Indian diaspora. Or Economic growth potentials
          for India as nation.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay71() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today we have entered into another one of the challenging part of
        writing, Geography. Most of the times, we have conceptual clarity in
        Geography, but we fail to put it in proper words. And this makes
        Geography very challenging to write. Another important requirement of
        Geography is content and presentation. Today’s question was asking you
        to write the characteristics of Circum-Pacific zone. Question was very
        basic one and still we have received just one Model Answer today due to
        poor presentation and just overload of content. Let’s discuss about
        today’s question,
      </GeneralTextContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. Here,
          context revolves around Circum-Pacific Zone.
        </ListItem>{" "}
        <ListItem>
          In the start, you can mention what Circum-Pacific belt is. As it is a
          core Geography question, it is always advisable to give spatial
          details of Circum-Pacific zone. That is, from where it starts, how it
          goes and where it ends.
        </ListItem>{" "}
        <ListItem>
          Always remember friends, whenever you give spatial angle, always draw
          a map. But dont do too mich of detailing. You’ll get hardly one minute
          at the most to draw it.
        </ListItem>{" "}
        <ListItem>
          In main body, you need to talk about various characteristics of the
          zone, that is, volcanoes, seismic zones, plate boundaries and
          associated landforms etc.
        </ListItem>{" "}
        <ListItem>
          You have to mention specific examples while giving these
          characteristics. Also, in Geography you need to accommodate more
          illustrations to convey things clearly.
        </ListItem>{" "}
        <ListItem>
          Hardly, any answer is showing small small illustrations showing the
          features. Almost everyone has drawn the map, but examiner will look
          beyond bookish illustrations. Illustration depicting, how things are
          happening at Circum-Pacific zone..??, is good value addition to your
          answer.
        </ListItem>{" "}
        <ListItem>
          Some answer are writing about El-Nino and La-Nina as characteristics
          of Circum-Pacific zone. It is completely irrelevant here. Stick to
          geomorphology only.
        </ListItem>{" "}
        <ListItem>
          In the conclusion, you can give disaster angle, mentioning how this
          zone is prone to various disasters.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay72() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was well known to all, that is, global warming and
        coral reefs. We study only dark side of global warming and ignore its
        bright side (for short time). Thus today, although question was well
        known, hardly anybody has covered the bright aspect. Let’s discuss about
        today’s question,
      </GeneralTextContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. Here,
          context revolves around the coral life system and impact of global
          warming on it.
        </ListItem>
        <ListItem>
          You can either start with the definition of Coral reefs or with the
          definition of Global Warming. But it is better if you are starting
          with any data or report showing the link between both. Recently
          released IPCC report can be a good option.
        </ListItem>
        <ListItem>
          In main body, you need to ASSESS the impact of global warming on coral
          life system. Assess means you need to explore both the sides of an
          issue. In short, you need to write about positive and negative impacts
          of Global Warming on Coral life system.
        </ListItem>
        <ListItem>
          We always read negative side of global warming. And hence, 99% of
          answers received today are just talking about negative impacts.
        </ListItem>
        <ListItem>
          Global warming has positive impact on temperate and polar region. It
          will significantly increase the temperature of the region and will
          give birth to new coral life system, which is not observed now due to
          cold water temperatures.
        </ListItem>
        <ListItem>
          So, first talk about positive impacts and then go for negative
          impacts. Here, question is not just on coral reefs, it is on coral
          life system, which has much larger coverage. Coral life system
          includes coral reefs, algae, fishes, crustaceans etc.
        </ListItem>
        <ListItem>
          While mentioning impacts along with examples, you can make good use of
          world map.
        </ListItem>
        <ListItem>In conclusion, provide solution to the problem.</ListItem>
        <ListItem>
          Dont write about benefits of coral reefs, threats to coral reefs etc.
          anywhere in your answer.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay73() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was based on water conservation in general and role of
        micro-watershed projects in drought-prone and semi-arid regions in
        particular. Let’s discuss about today’s question,
      </GeneralTextContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. Here,
          context revolves around water conservation and role of micro-watershed
          projects.
        </ListItem>
        <ListItem>
          There are multiple ways to start this answer. You can either start
          with explaining what micro-watershed development projects are or you
          can mention the status of water scarcity in arid and semi-arid regions
          in India.
        </ListItem>
        <ListItem>
          In main body you need to talk about the role of such projects in
          helping water conservation. Many of are getting confused here are have
          written components and benefits of micro-watershed projects. They are
          needed but should be written under proper heading.
        </ListItem>
        <ListItem>
          While mentioning the role, provide case studies and examples. Many of
          you are writing after the main body under a special heading as case
          study. It is a very bad way to represent them. Merge these examples
          and case studies while writing role itself.
        </ListItem>
        <ListItem>
          To balance off the answer, in the last part of main body, throw some
          light on challenges involved in the development of micro-watershed
          development projects.
        </ListItem>
        <ListItem>
          In conclusion, provide way forward in implementing these projects.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay74() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was a bit straight forward, but demanded powerful
        arguments in favour of coal mining, and not against. Also a good
        structure of an answer is must for such questions. Let’s discuss about
        today’s question,
      </GeneralTextContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the Coal mining as
          industry. Here, even though there was no mention of word India, main
          body of an answer should revolve around India only. But for
          Introduction, you can mention the role of coal industry in the
          development of other Developed countries. And give a hint to its link
          to Global warming.
        </ListItem>
        <ListItem>
          Main Body for this question should have at least 3 distinct
          subheadings, or structures.
        </ListItem>
        <ListItem>
          First, you can discuss the Negative environment impacts of Coal
          industry and mining. Here, no need to mention about other negative
          impacts like Social, economic etc. Stick to Environmental impacts
          only.
        </ListItem>
        <ListItem>
          Second, you can discuss about role of Coal in the development of
          India. Here, arguments can vary from its percentage of power
          generation from coal, use in other industries like steel, chemical
          etc, and factors like availability, cost, easy to use etc. You can add
          a map of India's Coal mining regions and related industries.
        </ListItem>
        <ListItem>
          Third, you can mention, how it is not possible to replace Coal, in
          near future, considering demands of India's development. Here, mention
          about the Role of Coal mining in employment generation, rising power
          demands to be met at low cost, edge of Coal power plants over other
          conventional ways like hydro and nuclear. Do not forget to mention,
          India being a developing country, which needs quick and cheap
          solutions to problems, with less dependence on Imports.
        </ListItem>
        <ListItem>
          Do not stop here, go one step ahead, and mention, even though it is
          not possible to replace coal completely, we can and should reduce our
          dependency on Coal mining. Here suggest the way forwards.
        </ListItem>
        <ListItem>
          You can conclude on the note of a balance required between ecology and
          economy.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay75() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today's question was a tricky one. One should pay attention to minute
        details, before deciding the demand of the question. Here, Critically
        Evaluate was the key instruction. But this instruction was for the
        various resources, and not for the Ocean Resources in general. Let’s
        discuss about today’s question,
      </GeneralTextContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the magnitude of
          resources Ocean can provide.
        </ListItem>{" "}
        <ListItem>
          For the main body, you can choose 3 to 4 Ocean resources, which can be
          harnessed to meet resource crisis in the world. For Example, Ocean
          Thermal and Tidal energy can be used to compensate for the shortage of
          conventional energy sources like coal and oil, required for the
          ever-growing energy demands. In the same way, fish as a source of
          food, polymetallic nodules as source of minerals are the examples you
          can mention.
        </ListItem>{" "}
        <ListItem>
          Now there are two ways to evaluate these resources. Either you can
          mention one resource at a time, discuss its potential and pros, and
          then discuss its cons or difficulties to harness (For examples,
          possibility of pollution, loss of biodiversity and huge economic costs
          while extracting polymetallic nodules). Most importantly, clarify your
          opinion, as it is Critically evaluate question.
        </ListItem>{" "}
        <ListItem>
          Other approach could be, discuss the pros of all the resources at
          once. And then discuss the cons. Don't miss out on the opinion, after
          your evaluation. Please note, there is no need of a blanket opinion
          about the resources. You can have different opinion about different
          resources.
        </ListItem>{" "}
        <ListItem>
          You can conclude with the need of a balanced and sustainable approach
          needed while harnessing such resources.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay76() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s we have started Daily Answer writing of one of the most
        favourite topic of all aspirants, that is, History. History is the
        subject we read when we start our preparation. One of the major benefit
        of history is, it has well defined sources and it is easy to understand.
        But it is too vast and has poor cost-benefit ratio. It needs continuous
        revisions, otherwise we forget the facts of History. That’s why we
        suggest you people to go for history at the very end. If you take
        history in the beginning, your initial fresh energy will get consumed by
        history and you’ll end up in having less enthusiasm and energy while
        going into comparatively difficult parts, like economy and geography.
        Apart from this, if you are not revising history regularly, you tend to
        forget the things. This will affect your self-confidence very badly.
        Hence, keep history at the end of your planning. After having these
        insights, let’s discuss about today’s question,
      </GeneralTextContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Today’s question was based on role of women in freedom struggle,
          especially in Gandhian phase. Though question looks straight forward
          one, it needs special structure to accommodate more points.
        </ListItem>
        <ListItem>
          Start your answer with greater context around the question. Here, the
          context revolves around the role of women in freedom struggle. In
          history answers, you can not start with definitions, reports or
          current events. Rather, you can either use timeline to start with or
          you can give philosophical touch to it.
        </ListItem>
        <ListItem>
          For example, you can say, Women participation in freedom struggle can
          be traced back to 1857 revolt through leadership roles played by Rani
          Laxmibai, Begun Hazaratmahal and it reached to the masses during
          Gandhian phase.
        </ListItem>{" "}
        <ListItem>
          Or you can say, Indian Freedom struggle has witnessed the
          participation of various sections of the society and role played by
          women in it has made Indian freedom struggle a mass movement in real
          sense.
        </ListItem>{" "}
        <ListItem>
          In main body you need to DISCUSS the role played by women. Question
          specifically demands you to focus on Gandhian phase but you have to
          mention the role before Gandhian phase as well, but in short.
        </ListItem>{" "}
        <ListItem>
          Many of you are just listing down the names of female participants.
          Question is not asking you to list down the names. Question is to
          DISCUSS the role.
        </ListItem>{" "}
        <ListItem>
          Role can be discussed as social role in social awakening, political
          role in addressing the masses and chairing congress sessions,
          revolutionary role in infusing the spirit of nationalism among masses,
          leadership role in leading the marches like salt marches and so on.
        </ListItem>{" "}
        <ListItem>
          Listing down few names as subheading will do the injustice to
          thousands of other women who participated and made sacrifices for the
          freedom. You can use specific names as an example.
        </ListItem>{" "}
        <ListItem>
          In short, this answer can be written without mentioning the specific
          name, specific data and specific timeline. You just need to bring
          maturity in your thinking process. It you know facts then it is good.
          But even if you dont, you ca write the answer with your general
          understanding.
        </ListItem>{" "}
        <ListItem>
          So stop worrying about history and break the shackles of conventional
          boring approach of studying history. UPSC has already tested your
          factual knowledge of history in Prelims and in mains they want to
          check your analytical ability.
        </ListItem>{" "}
        <ListItem>
          In conclusion, you can either summarise the answer or you can give
          limitations to women participation. There is no particular thumb rule
          to end history answer. You can end as per your convenience, just dont
          forget the context.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay77() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was on well known topic, that is, uprising of 1857
        revolt and evolution of British policies afterwards. We have lot of
        content about the Revolt, but question has a small hidden aspect which
        was missed by almost everybody. Hence we have received just one model
        answer today. Let’s discuss about today’s question,
      </GeneralTextContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. Here,
          the context revolves around policies before and after 1857 revolt.
        </ListItem>
        <ListItem>
          In the main body, you need to explain policy changes after the revolt.
          But at the same time, you should not be forgetting the important
          keyword in the question, important watershed.
        </ListItem>
        <ListItem>
          The literal meaning of watershed is, an event or time which is
          important because it marks the beginning of something new or
          different. This means, there is drastic change between before and
          after events of that particular watershed.
        </ListItem>
        <ListItem>
          In this question, such watershed is 1857 revolt. And there is drastic
          change between before and after policies. Hence, before writing about
          changed policies, you need throw some light on pre-1857 policies in
          short.
        </ListItem>
        <ListItem>
          If you are not mentioning pre-1857 policies, then you are not giving
          justice to watershed part.
        </ListItem>
        <ListItem>
          While mentioning post-1857 policy changes, some of you have gone too
          far and have mentioned Rowlatt Act, Morley-Minto Act etc. Dont go this
          far friends. Stick to immediate post-1857 policy changes.
        </ListItem>
        <ListItem>
          In the conclusion, mention how these policy changes have shaped the
          colonial rule for next 90 years.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay78() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was purely analytical one and was expecting you to look
        beyond conventional facts, which we usually read while studying History.
        This question serves as an excellent myth buster for conventional
        overall approach towards UPSC. Today question was demanding you to throw
        light on various ideological trends emerged post 1920, that is, during
        Gandhi Era and its impact on widening social base. Let’s discuss about
        today’s question,
      </GeneralTextContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. Here,
          the context revolves around the post 1920 ideological change and
          widened social base.
        </ListItem>
        <ListItem>
          In the start you can mention pre-1920 ideologies prevalent in freedom
          struggle. No need to mention them separately. It’ll consume lot of
          space and words otherwise.
        </ListItem>
        <ListItem>
          First part of main body demands you to write various ideological
          strands acquired by national movement. They are communal, communist,
          socialist, Gandhian etc.
        </ListItem>
        <ListItem>
          Second part of main body requires, how these strands led to expansion
          of social base. Many of you have not paid attention to this part.
        </ListItem>
        <ListItem>
          In second part you can simple say, due to Gandhian ideology social
          base was expanded to peasants, women, students etc. OR due to
          socialist/communist ideology social base was expanded to Labourers.
        </ListItem>
        <ListItem>
          If you are not mentioning expanding social base aspect, then you are
          not answering the question fully and you’ll loose marks accordingly.
        </ListItem>
        <ListItem>
          In the conclusion, you can either summarise the answer or you can give
          long term implications of these strands. Certain ideas from these
          ideologies can be observed in constitution and constitutional assembly
          debates.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay79() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was based on formation of national identity in 19th
        century, that is, before the beginning of full fledged freedom struggle
        and its linkages, that is, roots in Indian Renaissance. Question looks
        bit bulky sue heavy word, Indian Renaissance, but if you structure it
        properly it becomes very easy to answer it. Let’s discuss about today’s
        question,
      </GeneralTextContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. Here
          the context revolves around the emergence of national identity in 19th
          century and caused behind it.
        </ListItem>
        <ListItem>
          In the start, you can mention condition before the emergence of
          national identity. How India was politically and socially fragmented
          into multiple sections and how British took benefit of this.
        </ListItem>
        <ListItem>
          In main body, you need to EXAMINE how Indian Renaissance has led to
          emergence of national identity. Here, Indian Renaissance denotes not
          only social awakening but denotes political and economic awakening as
          well.
        </ListItem>
        <ListItem>
          Don’t restrict your answer just to social reform movement. Renaissance
          has very wide connotation. In simple terms, Renaissance means
          discovery of man. This self realisation led to infusion of self
          respect and ultimately led to forging national identity.
        </ListItem>
        <ListItem>
          While mentioning this, you can give multiple arguments starting from
          drain of wealth theory to demand for council entry. It also includes
          rediscovery of Indian culture through the works of Vivekananda, Max
          Muller, Alexander Cunningham, Ravindranath Tagore etc.
        </ListItem>
        <ListItem>
          In end, throw light on other side of the argument. It is true that
          Indian Renaissance created national identity. But it is not the sole
          cause. There are many international events which indirectly helped in
          building national identity. Defeat of Italy and Russia at the hands of
          Ethiopia and Japan respectively, Renaissance in Europe, French and
          American revolutions etc are also very much significant for emergence
          of national identity.
        </ListItem>
        <ListItem>
          You can put this aspect in the conclusion. Question asks you to
          EXAMINE. This means you need to look for arguments going in opposition
          to the question.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay80() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        First of all many apologies for the late evaluation and delayed
        feedback. Yesterday was the last day of Modern History and we saw a well
        discussed question to wrap it up. It was based on various economic
        policies of British since mid-eighteenth century till independence.
        Let’s discuss about yesterday’s question,
      </GeneralTextContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. Here
          the context revolves around economic policies of British.
        </ListItem>
        <ListItem>
          In the start you can mention the core principle of Drain of Wealth and
          how for this drain economic policies of British evolved over the
          period of time.
        </ListItem>
        <ListItem>
          In main body, you need to EXAMINE CRITICALLY the various facets if
          economic policies. Here, many of you are just listing down the stages
          of British economic policies, that is, Mercantilism, Mercantile
          Capitalism and Finance capitalism.
        </ListItem>
        <ListItem>
          Question is not asking you to just list down these stages and their
          features. We need to Examine those. This means, you have to throw
          light of their purpose and impacts in brief.
        </ListItem>
        <ListItem>
          Examine does not always mean positive and negative. We can not see any
          positive aspects of these policies. If you are writing any positive
          aspect, you’ll not only loose marks but it’ll create a very bad
          impression.
        </ListItem>
        <ListItem>
          In the conclusion part, mention how these polices impacted Indian
          economic landscape in long run.
        </ListItem>
        <ListItem>
          Now many of you are getting confused about what to do with CRITICALLY
          part. Critically part is your opinion and we are giving it in the
          conclusion, that, British economic policies has adversely affected
          India even after we got independence.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay81() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was a straight forward and a factual one. It is very
        important to present factual information to such questions. So more you
        know about art and culture, better are your chances of scoring. Let’s
        discuss about today’s question,
      </GeneralTextContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the timeline, physical location of Gandhara
          school and dynasty under which it flourished. And how it's importance
          in the history of our art and culture.
        </ListItem>{" "}
        <ListItem>
          It will be a good idea to present the location in the Map, with the
          various influences the school had from the neighbouring regions.
          Please note, map is not a must for this answer, but will certainly
          fetch you that extra half mark.
        </ListItem>{" "}
        <ListItem>
          In main body, you should divide your answer in 2 parts. First
          highlight the elements of Central Asian and then Greco-Bactrian, in
          Gandhara art. You can divide the elements like muscular form of
          Buddha, well defined biceps, broad shoulders, curly hairs,
          draping/angvastra, eyes of buddha, halo around the buddha, influence
          of fire worship etc. Ideally, you should not club these 2
          styles/elements, but if you are not sure about which element belongs
          to which style, or if you are confused, then only you should club
          them.
        </ListItem>{" "}
        <ListItem>
          In actual exam, you might not recall all the points that you have
          written in this daily answer writing. So it is ok to mention 4 to 5
          elements at least.
        </ListItem>{" "}
        <ListItem>
          In the conclusion, you can mention about the role played by Gadhara
          school of art in unfolding the history of the India vis-a-vis foreign
          elements through conquests and trade.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay82() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was not that difficult, still disappointed to see most
        of the answers missing the main demand of the question. The main demand
        of the question is the comparison between Indian civilization and the
        rest 3. And this was not met by most of the answers. Many a students
        wrote only about how Indian culture and tradition continued over the
        period. Let’s discuss about today’s question,
      </GeneralTextContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the reference to the 4 civilizations mentioned
          in the question. Please note ancient civilization in Indian
          subcontinent means IVC, Vedic and Dravidian. Many students have
          written the entire answer in the context of IVC.
        </ListItem>
        <ListItem>
          It will be a good idea, for this answer also, to present the location
          of these civilizations on the Map. You will certainly fetch extra half
          mark for this.
        </ListItem>
        <ListItem>
          In main body, you can divide you answer in 3 sub structures. Firstly,
          How there is a breakdown in the culture and traditions of the other 3
          civilizations. Here, you can give examples in the context of religion,
          art and architecture. This part is missed by many students
        </ListItem>
        <ListItem>
          Then, you can mentioned How there is continuance in the Indian
          subcontinent. Supplement with examples, in the context of religion,
          art, traditions, languages etc. Many a students have covered this part
          of the answer only.
        </ListItem>
        <ListItem>
          Lastly, you can give reasons for both the patterns (breakdown and
          continuance). This part is also missing from most of the answers.
        </ListItem>
        <ListItem>
          In the conclusion, you can mention about the changes happening in the
          current times in the Indian subcontinent, but the crux of our
          civilization is still intact.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay83() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was equally relevant for prelims as well as for mains.
        Foreign travellers’ account is much known topic and an important source
        in reconstructing the history. Let’s discuss about today’s question,
      </GeneralTextContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. Here,
          context revolves around the importance of Chinese and Arab travellers’
          account.
        </ListItem>
        <ListItem>
          We have been taught to mug up the fact of art culture all the time.
          But when you’ll see the questions in mains, they are purely analytical
          in nature. Today, you are not supposed to just list down the names of
          travellers. You have to ASSESS it’s role.
        </ListItem>
        <ListItem>
          In main body ASSESS means, you have to talk about how these sources
          are helpful in reconstructing the history. Generally foreign
          travellers were not patronised by king and hence they were free to
          portray the exact picture without any interference. Also their
          accounts were not restricted to court affair. They serve as good
          source of life of people, trade and geography.
        </ListItem>
        <ListItem>
          On the other hand, ASSESS means, we need to show other side as well.
          Here, other side is, we can not completely rely on travellers’
          account. They are important but not the only source.
        </ListItem>
        <ListItem>
          In the conclusion, you can say, there are other supplementary sources
          like numismatic, literary, sculptural etc. which can be used to
          reconstruct the accurate history.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay84() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was another myth buster about UPSC. Our minds have been
        trained to mug up the things intensively and in that quest we sometimes
        forget to pay attention to simple yet the most crucial things. We all
        study are culture but we never give a thought behind its purpose. It is
        there in the syllabus and we just fall in line keeping our heads down
        without asking the question why. But dont worry friends, even if you are
        not going to ask why, UPSC will certainly do. If we are not prepared for
        this WHY and when we see such questions on the D-Day, we encounter
        Jallianwala and Panipat altogether in the examination hall. Let’s
        discuss about today’s question,
      </GeneralTextContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. Here,
          the context revolves around India’s rich art and cultural heritage and
          necessity of safeguarding it.
        </ListItem>{" "}
        <ListItem>
          In the start, you can mention in short about the rich tangible and
          intangible art and cultural heritage of India. Whenever we come across
          the term art and culture, we often forget about intangible heritage.
          And the same has happened today with your answers.
        </ListItem>{" "}
        <ListItem>
          Main body asks you to COMMENT on the need of safeguarding art heritage
          of India. Comment means, you have to explore all the possible angles
          around issue. In short, COMMENT demands, Why and How.
        </ListItem>{" "}
        <ListItem>
          We need to safeguard any object means, either it is very important or
          it has certain threats. Same thing is true with the Indian Art
          Heritage. It is important as well as it has certain threats, and thats
          why safeguarding it has become necessary.
        </ListItem>{" "}
        <ListItem>
          Hence, in main body first talk about the significance of Art Heritage
          and then throw light on threats to it. Many of you are writing
          threats. It is okay to write like that but as we always suggest bring
          positive aspect first in your answer.
        </ListItem>{" "}
        <ListItem>
          Also you need to pay attention to NEED OF THE MOMENT part. This means
          it has become more necessary nowthesedays because its importance and
          significance has increased by manifolds in today’s times.
        </ListItem>{" "}
        <ListItem>
          You can throw light on modern threats like, dilution of intangible
          heritages (dance forms, folk music, languages) due to globalisation,
          plagiarism due to digitisation, sale in black market through dark web
          etc. Unfortunately not a single answer today is throwing light on this
          aspect.
        </ListItem>{" "}
        <ListItem>
          In the conclusion, provide measure and government steps to safeguard
          this heritage.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay85() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s example is another classical example of the difference between
        what UPSC is expecting from us and what do we study. Nitin Singhania is
        our first choice when we pick up Art and Culture for reading. And we
        challenge you people to answer this question from this book. You wont.
        Hence, we need to look beyond our traditional methods of learning. UPSC
        is changing fastly and we need to stand upto it. This question was asked
        in Mains-2020 and that too for 15 marks. Let’s discuss about today’s
        question,
      </GeneralTextContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the greater context around the question. Here,
          the context revolves around the idea which shaped the monuments and
          their art in India.
        </ListItem>{" "}
        <ListItem>
          In the start, you can mention some of thr characteristic features of
          monuments. It is very difficult to club all the features into a single
          para. Hence, whenever you come across such question, try to write in
          chronological manner.
        </ListItem>{" "}
        <ListItem>
          This means, first talk about general characteristics of Ancient times,
          then medieval and finally of modern times.
        </ListItem>{" "}
        <ListItem>
          In main body, along with examples write down how philosophy and and
          traditions played a significant role in conceiving and shaping the
          monuments and their art.
        </ListItem>{" "}
        <ListItem>
          Again tracing it in chronological way is the best thing to do. Start
          from Harappa and trace the development during Vedic Period, Maurya
          Period, Gupta Period, Sultanate Period, Mughal Period in chronological
          manner.
        </ListItem>{" "}
        <ListItem>
          You can mention South Indian history, Jainism, Buddhism, Sufism,
          Bhaktism etc in between.
        </ListItem>{" "}
        <ListItem>
          But never break the chronology. History demands analysis in
          chronological manner and it is the soul of the subject.
        </ListItem>{" "}
        <ListItem>
          While mentioning these significances, dont forget to give examples.
        </ListItem>{" "}
        <ListItem>
          Focus should be completely on Monuments and their art. Many of you are
          giving references of Music and Dances. How music can be represented on
          monuments? You have to give emphasis on paintings, sculptures,
          architecture and motifs.
        </ListItem>{" "}
        <ListItem>
          In the conclusion, mention other factors which shaped the art work on
          these monuments.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay86() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today we entered into a new territory. And as we expected we received
        very diverse answers. But unfortunately only one candidate for Model
        answer till now. Let’s discuss about today’s question,
      </GeneralTextContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with your understanding of CNP. There are many
          components of CNP like economic and military. We have observed that
          many a students have started with the definition of Ethics and Values.
          Perhaps Few students have written about the differences between Ethics
          and Values. This was not required at all. Please understand the demand
          of the question. Also as it is only 10 marker, so you do not have the
          luxury of words.
        </ListItem>
        <ListItem>
          Main body of the answer demanded 2 important aspects about the 3
          components mentioned. First aspect is "What is this component consists
          of?". For example, Human capital consists of educated, skilled and
          healthy citizens etc. Soft Power consists of the certain skills like
          negotiation and persuasion; and Social Harmony consists of bonding,
          internal security and prosperity etc.
        </ListItem>
        <ListItem>
          And the second aspect is, "How Ethics and Values help in enhancing
          these components ?". Here, try to link the some ethical aspects and
          values to every component. For example, for Human capital connect
          Importance to Gender equality, Education, Health, Personal and
          Professional ethics, Integrity etc. For Soft Power connect
          cooperation, mutual respect, coexistence, emotional intelligence etc.
          And for Soft Power connect Empathy, compassion, tolerance etc.
        </ListItem>
        <ListItem>
          In the conclusion, you can relate how India's CNP is strong because of
          strong ethical foundations. Also you can give a hint about, how the
          absence of Ethics and Values can corrode the CNP and relate it to any
          rouge state e.g. Pakistan.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay87() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was very straightforward one and was asking you to
        write the basic meaning of Ethics and Values. So indirectly demanding
        the linkages between these two.
      </GeneralTextContainer>
      <ReqNotReqContainer>What was not required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Dont write the importance of being professionally competent.
        </ListItem>
        <ListItem>Dont write the necessity of being ethical.</ListItem>
        <ListItem>Question is to forge a link between these two.</ListItem>
      </ListContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start you answer with the simple definition of Values and Ethics.
        </ListItem>
        <ListItem>
          If you can point out any point of difference between two, it will be
          an excellent start in that case.
        </ListItem>
        <ListItem>
          Then comes the second part of the question. This part demands you to
          explain the link between ethics and professional competency.
        </ListItem>
        <ListItem>
          Being professionally competent is a good virtue and should be
          cherished, but while doing so an individual should remain ethical.
        </ListItem>
        <ListItem>
          You can simply give heading like, importance of being ethical along
          with being professionally competent.
        </ListItem>
        <ListItem>
          While explaining under this heading, mention few examples. You can
          either use some historical examples or can give contemporary
          references.
        </ListItem>
        <ListItem>
          For example, you can say that, if a person is competent but
          not-ethical then she will find out smart ways of corruption. Harshad
          Mehta Scam is an excellent example of this.
        </ListItem>
        <ListItem>
          Whenever you give arguments in ethics, always give examples to
          substantiate your points. Without examples, answers sound shallow and
          bookish.
        </ListItem>
        <ListItem>
          You can conclude this answer in multiple ways. You can either conclude
          by providing ways to infuse both values to an individual or you can
          say both values are equally important. Just being an ethical without
          having any professional competency is equally harmful.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay88() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was very straightforward and demanded a clear 3 tier
        answer.
      </GeneralTextContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start you answer with the first part of the Question. Define
          Environmental ethics as a Part of Applied ethics. But don't just stop
          there. Always remember, "what is" type of question demand your
          understanding of the term. So always try to write definition and
          explain it in simple language. You can add an example for better
          understanding of the term.
        </ListItem>
        <ListItem>
          Second Part of the Question is a tricky one. "Why Important". While
          dealing with this type of question, you can choose different
          approaches.
          <br />
          (2.1) "Why to Study at first place" - Here you can explain the
          benefits of studying Environmental Ethics as a branch. Also you can
          mention reasoning like what if we don't study it, and supplement this
          with some examples.
          <br />
          (2.2)"Why to study NOW" - Here explain the urgency of the issue. Give
          reference to Climate change and the immediate dangers arising out of
          it.
        </ListItem>
        <ListItem>
          Third part of the answer is the most crucial one. Here it is expected
          to mention any (and ONLY) one Environmental issue. Higher priority in
          terms of content, should be for this Part of the answer.
        </ListItem>
        <ListItem>
          Mention any one case study, preferably from India. E.g. Ken Betwa
          River linking or Narmada Bachao Andolan etc. You can add a map or
          illustration of the Project as small snippet for Value addition to
          your answer.
        </ListItem>
        <ListItem>
          Mention all the Issues and Dilemmas involved in that Project e.g.
          Development vs Environment, Local vs Global, Immediate benefit vs long
          term loss, Eco centrism vs Bio Centrism or Anthro centrism vs Animal
          ethics. It can be anything, But it is MUST to address the Dilemmas.
          This was missing from most of the answers.
        </ListItem>
        <ListItem>
          Conclude your answer with the solution to the dilemmas mentioned. It
          is important to clearly mention your stand on the issues and Dilemmas
          presented in the end.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay89() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was also straightforward. And many of you got it right.
        But we will share only 2 model answers, in order to avoid confusion and
        information overdose for you guys.
      </GeneralTextContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start you answer with the your understanding of the term
          "Constitutional Morality". Please take a note that it is Morality and
          not ethics. Some students have taken a wrong meaning because of the
          confusion between Morality and Ethics.
        </ListItem>
        <ListItem>
          Apart from you understanding, it will be better if you could add the
          meaning as per Dr. B. R. Ambedkar's perspective.
        </ListItem>
        <ListItem>
          Do not forget to add example to explain your understanding. Also, for
          this question you can add some creative illustrations also. Please
          refer to the Model answers attached.
        </ListItem>
        <ListItem>
          For the second part of the answer, divide your content for different
          agents. For Example, A common man, A citizen, A government Servant, A
          high court or supreme court Judge, A Politician etc.
        </ListItem>
        <ListItem>
          And then add at least one Example for each agent - How it is possible
          for him/her to uphold the Morality. For Example, For a common man can
          uphold Art 15 (Right to Equality) by not discriminating between a son
          and a daughter; For a Citizen, by Respecting Freedom of Religion of
          all other citizens; For Govt Servant, following all DPSPs and acting
          within the sanctioned charge given by Constitution; For a Judge, by
          respecting the Art 31 etc etc.
        </ListItem>
        <ListItem>
          Conclude your answer by mentioning the supremacy of Indian
          Constitution above all ethical angles, and the role it plays like a
          guiding light in case of any Dilemmas.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay90() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question is an innovation which you will see mostly in GS4
        Question Papers. Question itself demands 2 clear sub-structures as (a)
        and (b). Despite being so explicit about it, some student dared to club
        the content in the main body.
      </GeneralTextContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          The very first statement about Law and ethics is not only a leading
          statement but has a direct reference in Part (a) and indirect
          reference in Part (b).
        </ListItem>
        <ListItem>
          Do not explain the first statement at length, for introduction. You
          can simply define Law and Ethics and point out the basic difference in
          the start. Please note, it is okay not to mention the difference at
          the start, but it is not ok to explain or mention all differences at
          the start.
        </ListItem>
        <ListItem>
          First part of the answer demands explanation of the Role Law and
          Ethics played in controlling / guiding / motivating the civilized
          behaviour. Explain the role played both tools and then supplement the
          explanation with examples. For example, fear of punishment, for
          breaking a law, is the motivation of a Particular civilized behaviour
          like following traffic rules. Same goes for Ethics, where the
          motivation is in terms social stigma / boycott etc. Examples for
          Ethics could be helping the neighbours, promoting basic hygiene in
          society etc.
        </ListItem>
        <ListItem>
          Please take a note, your examples for both the tools, should be
          relevant for civilized social existence. So avoid giving examples from
          any other applied ethics or such laws.
        </ListItem>
        <ListItem>
          Also, only one example is sufficient for first part of the answer, per
          tool.
        </ListItem>
        <ListItem>
          Second part explicitly demands examples. Here, firstly point out the
          difference in terms of the approaches of both the tools. It is okay to
          just mention the parameter considered for the differences and mention
          one example for each parameter. For examples, Motivation is a
          parameter and Fear of Punishment / Fear of Social boycott are the
          difference. And add example for this parameter. Then you can mention
          second parameter and so on..
        </ListItem>
        <ListItem>
          Question has used the word examples, so multiple parameters and
          examples are required. Don't stop with one or two.
        </ListItem>
        <ListItem>
          In the conclusion, you can mention about the tight coupling between
          Law and ethics. Laws always have a ethical footings and Ethics in a
          particular society are driven by Law. Both are equally important for
          Civilized Social existence.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay91() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was very straightforward, but needed conceptual clarity
        in order to get good marks.
      </GeneralTextContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the mention of how the two terms are often used
          interchangeably, but they are different on many fronts.
        </ListItem>
        <ListItem>
          First Part of the answer demands clear differences between Laws and
          Rules.
        </ListItem>
        <ListItem>
          It is a good idea to mention the differences in a table format. And it
          a better idea to add a Column of Parameters used for Comparison in the
          same table.
        </ListItem>
        <ListItem>
          Parameters, for comparison, could be Meaning, Applicability, Scope,
          Responsible for Creation, Consequences etc.
        </ListItem>
        <ListItem>
          Second Part of the question, can be explained with 2 substructures.
          Firstly, explain how Ethics provides framework for creation of Rules
          and Laws. You can mention the dependency in terms of Means and Ends
          analogy.
        </ListItem>
        <ListItem>
          Secondly, mention how the Rules and Laws with presence of Ethical
          underlining lead to stable and civilized society. And on contrary, how
          with the absence of ethical underlining, Laws and Rules can become
          draconian and unjust. Don't forget to provide examples for both sides.
          Simple Examples like - India and Taliban/N. Korean are also ok. But
          the examples should be elaborate with the mention of Good or Just Laws
          and Draconian or unjust laws and rules.
        </ListItem>
        <ListItem>
          In the conclusion, you can mention about how it is imperative to
          oppose the Laws and Rules which are not ethical
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay92() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was straightforward, but many a students failed to meet
        the exact demand. The probable reason is to blindly follow the material
        available online. Many a copies had the answers exactly copied from the
        so called model answers available online. Guys, please apply your brains
        first, decode the question, find out the demand of the question, and
        then may be try to get some extra content about this demand from online
        sources. Please remember, unless you expose your own understanding to
        us, the feedback you are receiving will not be of much help.
      </GeneralTextContainer>
      <ReqNotReqContainer>What was not required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          First statement was a leading statement. So the context of the
          question was not about Civil servant. Still most of the answers were
          dealing how Positive attitude is helpful for a Civil Servant.
        </ListItem>
        <ListItem>
          Theoretical content like Content, Structure and Functions of the
          Attitude was not the demand of the question.
        </ListItem>
      </ListContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the mention of Positive attitude is must for
          any person in general and Civil Servant in particular. Alternatively,
          you can define Positive attitude also.
        </ListItem>
        <ListItem>
          Main Body demand of the question is very simple. It only demands the
          factors responsible for the Positive Attitude. Factors like, family,
          friends, schools, meditation, books, sports, exercise etc etc..
        </ListItem>
        <ListItem>
          It will be a good idea to divide all these factors into Internal and
          External factors.
        </ListItem>
        <ListItem>
          Also, only mentioning the factors contributing will not suffice.
          Provide examples to justify the factor.
        </ListItem>
        <ListItem>
          You can conclude your answer with the mention of the positive attitude
          helps to get the positive outcome, especially in stressful and
          difficult environment.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay93() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was also very straightforward. But still many a student
        are struggling to decode it.
      </GeneralTextContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          First statement of the question was a leading statement. The term
          "them" in the main question was this first statement. Lets understand
          how to decode it. Young people means the youth. With ethical conduct,
          means all the good people, in lay-mans term. Are not willing to come
          forward to join active politics means they are having NEGATIVE
          ATTITUDE towards Politics in general and Active Politics in
          Particular.
        </ListItem>
        <ListItem>
          Once the above understanding is clear, it becomes easy to suggest the
          steps to motivate them, which is the main body.
        </ListItem>
        <ListItem>
          For the Introduction, you can mention any fact/figure/data/report
          stating the ratio of youth in active politics in India or in World.
          And most importantly with NO CRIMINAL RECORD. This is the important
          point, and missed by many a students, because they ignore the "With
          ethical conduct" part of the question.
        </ListItem>
        <ListItem>
          Suggestions can be anything from the inculcating political education
          from School time to making active politics compulsory in some form as
          a part of curriculum. You can suggest steps to decriminalise the
          politics. You can also suggest the steps which can incentivise the
          youth. Steps like reservation to youth in Political party are also
          okay. See, the question is just to suggest the steps, and not to
          critically analyse them, so the onus of policy implementation is not
          on you. Hence show some creativity and suggest out of the box
          suggestions. This is the best chance to impress the evaluator.
        </ListItem>
        <ListItem>
          Also notice one thing, there is no mention of India here, but we all
          know it is always in the context of India. But at the same time, there
          is no Harm, perhaps it will be a smart move to just mention the
          problem is not India specific, and consider it as a Global attitude.
        </ListItem>
        <ListItem>
          In the conclusion, you can mention about the need of Ethical
          Youngsters in the Active politics to make a country truly democratic
          and progressive. Or you can link the need to the changing
          Socio-political dynamics of the 21st century.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay94() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        We have observed many a student simply opted out to write answer for
        this question, because they thought it was difficult. Trust me, if you
        don't dare to attempt NOW, more likely you will fare very bad in actual
        exam. Today’s question was a tricky one. Firstly, it was only a 10
        markers and the question has so many demands. But then this is UPSC, so
        what do you expect otherwise ! Lets see how to deal with such questions
        in a simple way.
      </GeneralTextContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          It is ok to compromise on the intro for such lengthy questions. So
          Just one statement about everyone having some attitude towards deep
          rooted Caste systems is enough.
        </ListItem>
        <ListItem>
          Question has 3 demands. First Part was comparatively very easy. Its a
          What type of Question. So you can simply enlist the list of the
          factors. But which factors ? Only those factors which create or
          affects an attitude towards Social Problems. So list can have factors
          like, Past experiences, Education Background, Gender, Family
          background, Surrounding Environment, Emotional Intelligence, Value
          system etc etc.
        </ListItem>
        <ListItem>
          Now again, Do NOT waste words to explain how these factors are
          relevant or try to establish connection or try to add examples for
          this part. You can not afford to waste any words here, and especially
          when it is not the demand.
        </ListItem>
        <ListItem>
          The next statement is a leading statement. No need to explain it in
          any way.
        </ListItem>
        <ListItem>
          Second Demand of the Question is about your observation of the
          Contrasting attitudes about CASTE SYSTEM in our society. Here, Focus
          should be on keywords. Contrasting - means 2 extreme attitudes, hence
          it is required to mention Positive attitude and Negative attitude
          about Caste Systems E.g. Few people think Caste System is Must for
          Indian society and as it serves some purpose, whereas there is a
          section which believes there should no CASTE systems at all. This is
          one contrast. Another contract could be, One section believing
          Equality of all casts, where as another believes in the diversity
          along with hierarchy. This is another contrast. There can many such
          contrasts. We leave it to your observation and analysis. But at least
          2 such pairs should be mentioned along with some explanation or
          example.
        </ListItem>
        <ListItem>
          Moving on to the third demand of the question. This is the tricky one.
          How do you explain the existence of these contrasting attitude? This
          part is asking for the RATIONAL behind such extremes. So The first
          Part where we have mentioned few Factors, take help of them and prove
          how those factors are not same for all. Hence there is diversity of
          attitudes and hence the contrasts. Provide any one example to one
          Factor, e.g. Family background, A child raised on orthodox family
          which has conservative views about Caste system, is likely to develop
          similar attitude in contrast to one raised in a Metro city with
          liberal Parents who belong to different castes or Religion. You can
          mention at max 2 such factors.
        </ListItem>
        <ListItem>
          Now that's not all, the last part also demands, how these contrasting
          views are co-existing and what's your stake on this (means your
          attitude). You can conclude with this part of the answer also, as
          there will be a crunch of words for this answer.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay95() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer>
        Today’s question was very simple. Nothing much to decode.
      </GeneralTextContainer>

      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem>
          Start your answer with the understanding of the context of the
          question. Few students misunderstood the question. It was a How could
          question and not how did. Also, so called model answers available on
          internet misguided many. So the correct context here is, Swachh Bharat
          Abhiyan is a limited success, and there is scope for improvement by
          use of Persuasion and Social Influence. No need to explain what is
          Persuasion and Social Influence theory in detail. No need to mention
          the features of SBA or the tools already used.
        </ListItem>
        <ListItem>
          Main body of the question, demands your suggestion and ideas. This is
          your chance to show your creativity, originality and Imagination. Such
          open ended questions are also asked in the Interview stage. Better to
          be prepared for them 😊.
        </ListItem>
        <ListItem>
          Suggestions can be divided in 2 parts, Persuasion and Social
          Influence. Some possible of suggestions are awards and recognition to
          Individuals, Housing Societies promoting Cleanliness, Use of Local
          Celebrities' for Promotion, Concession in Property tax for achieving
          some cleanliness targets, Frequent use of Street Plays and NSS Camp
          like activities to encourage youth, Use of Cleanliness drive cum
          Marathons, distribution of dustbins and garbage bags in the slums,
          Creative use of slogans and use of religious symbols on the public
          walls and areas etc etc.. Ensure you divide them in 2 Parts and also
          explain a suggestion if required.
        </ListItem>
        <ListItem>
          Conclude your answer with the mention as how Social Influence and
          Persuasion if used effectively are the right tools to change a
          Negative attitude about any Public Policy. You can give reference to
          any other success story also where these tools have been very
          effective.
        </ListItem>
      </ListContainer>
    </SectionContainer>
  );
}

export function FeedbackDay96() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer></GeneralTextContainer>

      <ReqNotReqContainer>What was not required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}
export function FeedbackDay97() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer></GeneralTextContainer>

      <ReqNotReqContainer>What was not required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}
export function FeedbackDay98() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer></GeneralTextContainer>

      <ReqNotReqContainer>What was not required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}
export function FeedbackDay99() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer></GeneralTextContainer>

      <ReqNotReqContainer>What was not required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}
export function FeedbackDay100() {
  return (
    <SectionContainer>
      <Title>General Feedback</Title>
      <GeneralTextContainer></GeneralTextContainer>

      <ReqNotReqContainer>What was not required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
      <ReqNotReqContainer>What was required?</ReqNotReqContainer>
      <ListContainer>
        <ListItem></ListItem>
      </ListContainer>
    </SectionContainer>
  );
}
