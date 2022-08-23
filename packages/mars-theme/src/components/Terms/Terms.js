import React, { useRef, useState, useEffect } from "react";
import Container from "../constant/Container";
import TextLink from "../constant/TextLink";
import P from "../constant/Paragraph";
import { font, stretch } from "../base/functions";
import { TitleM, TitleS } from "../constant/Title";
import { styled, connect } from "frontity";

const terms = [
  {
    id: 1,
    title: "Определение терминов",
    terms: [
      {
        id: 1,
        content:
          "В настоящей Политике конфиденциальности используются следующие термины:",
        terms: [
          {
            id: 1,
            content:
              '«сайт» – сайт <a href="https://ux-school.by/">https://ux-school.by/</a>',
          },
          {
            id: 2,
            content:
              "«Администрация сайта» – уполномоченные сотрудники по управлению сайтом, действующие от ИП Колесень И.Г., которые организуют и (или) осуществляет обработку персональных данных, а также определяет цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными.",
          },
          {
            id: 3,
            content:
              "«Персональные данные» — любая информация, относящаяся к прямо или косвенно определённому или определяемому физическому лицу (субъекту персональных данных).",
          },
          {
            id: 4,
            content:
              "«Обработка персональных данных» — любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных.",
          },
          {
            id: 5,
            content:
              "«Конфиденциальность персональных данных» — обязательное для соблюдения Администрацией сайта или иным получившим доступ к персональным данным лицом требование не допускать их распространения без согласия субъекта персональных данных или наличия иного законного основания.",
          },
          {
            id: 6,
            content:
              "«Пользователь сайта (далее Пользователь)» – лицо, имеющее доступ к сайту, посредством сети Интернет и использующее Сайт.",
          },
          {
            id: 7,
            content:
              "«Cookies» — небольшой фрагмент данных, отправленный веб-сервером и хранимый на компьютере пользователя, который веб-клиент или веб-браузер каждый раз пересылает веб-серверу в HTTP-запросе при попытке открыть страницу соответствующего сайта.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Общие положения",
    terms: [
      {
        id: 1,
        content:
          "Использование Пользователем сайта означает согласие с настоящей Политикой конфиденциальности и условиями обработки персональных данных Пользователя.",
      },
      {
        id: 2,
        content:
          "В случае несогласия с условиями Политики конфиденциальности Пользователь должен прекратить использование Сайта.",
      },
      {
        id: 3,
        content:
          "Настоящая Политика конфиденциальности применяется только к Сайту. Сайт не контролирует и не несёт ответственность за сайты третьих лиц, на которые Пользователь может перейти по ссылкам, доступным на Сайте.",
      },
      {
        id: 4,
        content:
          "Администрация сайта не проверяет достоверность персональных данных, предоставляемых Пользователем Сайта.",
      },
    ],
  },
  {
    id: 3,
    title: "Предмет политики конфиденциальности",
    terms: [
      {
        id: 1,
        content:
          "Настоящая Политика конфиденциальности устанавливает обязательства Администрации сайта по неразглашению и обеспечению режима защиты конфиденциальности персональных данных, которые Пользователь предоставляет по запросу Администрации сайта при регистрации на сайте или при совершении иных действий посредством Сайта.",
      },
      {
        id: 2,
        content:
          "Персональные данные, разрешённые к обработке в рамках настоящей Политики конфиденциальности, предоставляются Пользователем путём заполнения регистрационной формы или совершения иных действий на сайте, и могут включать в себя следующую информацию:",
        terms: [
          { id: 1, content: "фамилию, имя, отчество Пользователя;" },
          { id: 2, content: "контактный телефон Пользователя;" },
          { id: 3, content: "адрес электронной почты (email);" },
          {
            id: 4,
            content: "услугу, которую сравнивает или выбирает Пользователь;",
          },
          { id: 5, content: "место жительство Пользователя;" },
        ],
      },
      {
        id: 3,
        content:
          "Также сайт осуществляет сбор и обработку обезличенных данных о посетителях (в т.ч. файлов «cookie») с помощью сервисов интернет-статистики (Яндекс Метрика и Гугл Аналитика и других).",
      },
      {
        id: 4,
        content:
          "Любая иная персональная информация неоговоренная выше (история покупок, используемые браузеры и операционные системы и т.д.) подлежит надёжному хранению и нераспространению, за исключением случаев, предусмотренных в п.п. 5.2. и 5.3. настоящей Политики конфиденциальности.",
      },
    ],
  },
  {
    id: 4,
    title: "Цели сбора персональной информации пользователя",
    terms: [
      {
        id: 1,
        content:
          "Персональные данные Пользователя Администрация сайта может использовать в целях:",
        terms: [
          {
            id: 1,
            content:
              "Установления с Пользователем обратной связи, включая направление уведомлений, запросов, касающихся использования сайта, оказания услуг, обработка запросов и заявок от Пользователя.",
          },
          {
            id: 2,
            content:
              "Информирование Пользователя посредством отправки электронных писем.",
          },
          {
            id: 3,
            content:
              "Предоставления Пользователю доступа к персонализированным ресурсам Сайта.",
          },
          {
            id: 4,
            content: `Предоставления Пользователю с его согласия, новостной рассылки и иных сведений от имени Сайта. Пользователь всегда может отказаться от получения информационных сообщений, направив Администрации сайта письмо на адрес электронной почты <a href="mailto:hello@ux-school.by">hello@ux-school.by</a> с пометкой «Отказ от уведомлениях о новых продуктах и услугах и специальных предложениях».`,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Способы и сроки обработки персональной информации",
    terms: [
      {
        id: 1,
        content:
          "Обработка персональных данных Пользователя осуществляется без ограничения срока, любым законным способом, в том числе в информационных системах персональных данных с использованием средств автоматизации или без использования таких средств.",
      },
      {
        id: 2,
        content:
          "Пользователь соглашается с тем, что Администрация сайта вправе передавать персональные данные третьим лицам, в частности, курьерским службам, организациями почтовой связи, операторам электросвязи, исключительно в целях выполнения заказа Пользователя, оформленного на Сайте.",
      },
      {
        id: 3,
        content:
          "Персональные данные Пользователя могут быть переданы уполномоченным органам государственной власти Республики Беларусь только по основаниям и в порядке, установленным законодательством Республики Беларусь.",
      },
      {
        id: 4,
        content:
          " При утрате или разглашении персональных данных Администрация сайта информирует Пользователя об утрате или разглашении персональных данных.",
      },
      {
        id: 5,
        content:
          "Администрация сайта принимает необходимые организационные и технические меры для защиты персональной информации Пользователя от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий третьих лиц.",
      },
      {
        id: 6,
        content:
          "Администрация сайта совместно с Пользователем принимает все необходимые меры по предотвращению убытков или иных отрицательных последствий, вызванных утратой или разглашением персональных данных Пользователя.",
      },
    ],
  },
  {
    id: 6,
    title: "Обязательства сторон",
    terms: [
      {
        id: 1,
        content: "Пользователь обязан:",
        terms: [
          {
            id: 1,
            content:
              "Предоставить информацию о персональных данных, необходимую для пользования Сайтом.",
          },
          {
            id: 2,
            content:
              "Обновить, дополнить предоставленную информацию о персональных данных в случае изменения данной информации.",
          },
        ],
      },
      {
        id: 2,
        content: "Администрация сайта обязана:",
        terms: [
          {
            id: 1,
            content:
              "Использовать полученную информацию исключительно для целей, указанных в п. 4 настоящей Политики конфиденциальности.",
          },
          {
            id: 2,
            content:
              "Обеспечить хранение конфиденциальной информации в тайне, не разглашать без предварительного письменного разрешения Пользователя, а также не осуществлять продажу, обмен, опубликование, либо разглашение иными возможными способами переданных персональных данных Пользователя, за исключением п.п. 5.2. и 5.3. настоящей Политики Конфиденциальности.",
          },
          {
            id: 3,
            content:
              "Принимать меры предосторожности для защиты конфиденциальности персональных данных Пользователя согласно порядку, обычно используемого для защиты такого рода информации в существующем деловом обороте.",
          },
          {
            id: 4,
            content:
              "Осуществить блокирование персональных данных, относящихся к соответствующему Пользователю, с момента обращения или запроса Пользователя или его законного представителя либо уполномоченного органа по защите прав субъектов персональных данных на период проверки, в случае выявления недостоверных персональных данных или неправомерных действий.",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Ответственность сторон",
    terms: [
      {
        id: 1,
        content:
          "Администрация сайта, не исполнившая свои обязательства, несёт ответственность за убытки, понесённые Пользователем в связи с неправомерным использованием персональных данных, в соответствии с законодательством Республики Беларусь, за исключением случаев, предусмотренных п.п. 5.2., 5.3. и 7.2. настоящей Политики Конфиденциальности.",
      },
      {
        id: 2,
        content:
          "В случае утраты или разглашения Конфиденциальной информации Администрация сайта не несёт ответственность, если данная конфиденциальная информация:",
        terms: [
          {
            id: 1,
            content: "Стала публичным достоянием до её утраты или разглашения.",
          },
          {
            id: 2,
            content:
              "Была получена от третьей стороны до момента её получения Администрацией Сайта.",
          },
          {
            id: 3,
            content: "Была разглашена с согласия Пользователя.",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Разрешение споров",
    terms: [
      {
        id: 1,
        content:
          "До обращения в суд с иском по спорам, возникающим из отношений между Пользователем сайта и Администрацией сайта, обязательным является предъявление претензии (письменного предложения о добровольном урегулировании спора).",
      },
      {
        id: 2,
        content:
          "Получатель претензии в течение 30 календарных дней со дня получения претензии, письменно уведомляет заявителя претензии о результатах рассмотрения претензии.",
      },
      {
        id: 3,
        content:
          "При не достижении соглашения спор будет передан на рассмотрение в судебный орган в соответствии с действующим законодательством Республики Беларусь.",
      },
      {
        id: 4,
        content:
          "К настоящей Политике конфиденциальности и отношениям между Пользователем и Администрацией сайта применяется действующее законодательство Республики Беларусь.",
      },
    ],
  },
  {
    id: 9,
    title: "Дополнительные условия",
    terms: [
      {
        id: 1,
        content:
          "Администрация сайта вправе вносить изменения в настоящую Политику конфиденциальности без согласия Пользователя.",
      },
      {
        id: 2,
        content:
          "Новая Политика конфиденциальности вступает в силу с момента её размещения на сайте, если иное не предусмотрено новой редакцией Политики конфиденциальности.",
      },
      {
        id: 3,
        content:
          "Все предложения или вопросы по настоящей Политике конфиденциальности следует направлять на электронный адрес Администрации сайта: hello@ux-school.by",
      },
      {
        id: 4,
        content: `Действующая Политика конфиденциальности размещена на странице по адресу <a href="https://ux-school.by/">https://ux-school.by/</a>`,
      },
    ],
  },
];

const Terms = ({ state }) => {
  const { isMobile } = state.theme;

  const contentRef = useRef(null);

  const [scrollValues, setScrollValues] = useState(null);
  const [windowPosition, setWindowPosition] = useState(0);
  const [hoveredElementIndex, setHoveredElementIndex] = useState(0);

  const scrollToTerm = (index) => {
    const contentBlock = contentRef.current;

    const term = contentBlock.children[index];

    term.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (contentRef) {
      const contentBlock = contentRef.current;

      const scrollValues = [];

      Array.from(contentBlock.children).forEach((el, idx) => {
        const topScroll = el.getBoundingClientRect().top + window.pageYOffset;

        scrollValues.push({ index: idx, top: topScroll });
      });

      setScrollValues(scrollValues);
    }
  }, [contentRef]);

  useEffect(() => {
    if (scrollValues !== null) {
      const doc = document.documentElement;

      window.addEventListener("scroll", () => {
        const topPosition =
          (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

        setWindowPosition(topPosition);
      });
    }

    return () => {
      window.removeEventListener("scroll", () => {
        const topPosition =
          (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

        setWindowPosition(topPosition);
      });
    };
  }, [scrollValues]);

  useEffect(() => {
    if (scrollValues !== null) {
      const termsScrolls = scrollValues;

      const activeTermIndex = termsScrolls.reduce((activeIdx, current, idx) => {
        if (windowPosition > current.top) {
          return idx;
        }

        return activeIdx;
      }, 0);

      setHoveredElementIndex(activeTermIndex);
    }
  }, [windowPosition]);

  return (
    <TermsWrapper>
      <Container>
        <Content>
          <Info>
            <TermsTitleM color="black" mb={isMobile ? 15 : 23}>
              Политика конфиденциальности
            </TermsTitleM>
            <Subtitle>
              <P size="l">
                Настоящая Политика конфиденциальности регулирует порядок
                обработки и использования персональных и иных данных, которые
                ИП Колесень И.Г. может получить о Пользователе во время
                использования сайта{" "}
                <TextLink link="https://ux-school.by/">
                  https://ux-school.by/
                </TextLink>
                .
              </P>
            </Subtitle>
          </Info>
          <NavigationWrapper>
            <Navigation>
              {terms.map((term, idx) => (
                <NavItem key={term.id} onClick={() => scrollToTerm(idx)}>
                  <NavButton
                    active={hoveredElementIndex === idx}
                  >{`${term.id}. ${term.title}`}</NavButton>
                </NavItem>
              ))}
            </Navigation>
          </NavigationWrapper>
          <TermsContent ref={contentRef}>
            {terms.map((term) => {
              const termNumber = term.id;

              return (
                <TermsItem key={termNumber}>
                  <TitleS mb={isMobile ? 15 : 23} color="black">
                    {`${termNumber}. ${term.title}`}
                  </TitleS>
                  {term.terms.map((termItem) => {
                    const termItemNumber = termItem.id;

                    return (
                      <React.Fragment key={termItemNumber}>
                        <Term size="l">
                          {`${termNumber}.${termItemNumber}. `}
                          <span
                            dangerouslySetInnerHTML={{
                              __html: termItem.content,
                            }}
                          />
                        </Term>
                        {termItem.terms &&
                          termItem.terms.map((underTermItem) => {
                            const underTermItemNumber = underTermItem.id;

                            return (
                              <Term size="l" key={underTermItemNumber}>
                                {`${termNumber}.${termItemNumber}.${underTermItemNumber}. `}
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: underTermItem.content,
                                  }}
                                />
                              </Term>
                            );
                          })}
                      </React.Fragment>
                    );
                  })}
                </TermsItem>
              );
            })}
          </TermsContent>
        </Content>
      </Container>
    </TermsWrapper>
  );
};

const TermsTitleM = styled(TitleM)`
  word-wrap: break-word;
`;

const NavButton = styled.button`
  background: transparent;
  display: inline;
  border: none;
  padding: 0;
  color: ${({ active }) => (active ? "var(--gray-200)" : "var(--black-900)")};
  ${font(14, 20)};
  ${stretch(110)};
  text-align: left;
  &:hover {
    color: var(--link-500);
  }
`;

const NavItem = styled.li`
  padding: 0;
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Navigation = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  position: sticky;
  top: 80px;
`;

const Term = styled(P)`
  color: var(--black-900);
  margin-bottom: 14px;
  &:last-child {
    margin-bottom: 0;
  }
  @media screen and (max-width: 991px) {
    ${font(21, 32)};
    ${stretch(109)};
    margin-bottom: 12px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const TermsItem = styled.li`
  padding: 0;
  margin-bottom: 47px;
  &:last-child {
    margin-bottom: 0;
  }
  @media screen and (max-width: 991px) {
    margin-bottom: 34px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Subtitle = styled.div`
  & p {
    color: var(--black-900);
    ${font(21, 32)};
    ${stretch(109)};
  }
`;

const TermsContent = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const NavigationWrapper = styled.nav`
  padding-top: 14px;
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

const Info = styled.div`
  grid-column-start: 2;
  @media screen and (max-width: 991px) {
    grid-column-start: 1;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: calc(((3 / 12) * 100%) - 16px) calc(
      ((8 / 12) * 100%) - 16px
    );
  grid-column-gap: calc(((1 / 12) * 100%) - 16px);
  grid-row-gap: 55px;
  @media screen and (max-width: 991px) {
    grid-template-columns: 100%;
    grid-gap: 39px;
  }
`;

const TermsWrapper = styled.div`
  padding: 96px 0 184px;
  @media screen and (max-width: 991px) {
    padding: 54px 0 218px;
  }
`;

export default connect(Terms);
