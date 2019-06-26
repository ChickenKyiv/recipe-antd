## SD https://github.com/GroceriStar/sd
- тесты работают на простом уровне. Код чистый по максимуму.
- окончание работы над FoodComposition https://github.com/GroceriStar/sd/tree/master/generator/projects/FoodComposition
- окончание работы с Measurements https://github.com/GroceriStar/sd/tree/master/generator/projects/Measurements
- объединение файлов Эльнура в generated file
- окончание работы над USFA https://github.com/GroceriStar/sd/tree/master/generator/projects/USFA
- вынос generator в отдельный проект https://github.com/GroceriStar/sd/tree/master/generator
- еще есть Loopbacky structure/Meal Calendar/Nutritions
- Readme с описанием содержание проекта


## Fetch https://github.com/GroceriStar/groceristar-fetch
Мне кажется что мы закоментировали кучу функционала.
Евгений это сделал для того, чтобы тесты работали.
После этого многое может и должно отвеливаться.
Как возобновит работу этого модуля? Скачать старые версии плагинаю Например на 5-10 релизов назад. Или на один minor release назад и сравнить функционал. Или выложить новый релиз.обновить репозитории, в которых он используется: [recipe-antd](https://github.com/ChickenKyiv/recipe-antd), showcase, [fake-api](https://github.com/GroceriStar/fake-api), [graphql](https://github.com/GroceriStar/graphql-server), etc.

В этих проектах у нас есть файлы selectors.js, которые имеют список методов, которые нам нужны.
- Заработать в nodejs/reactjs
- перевод его на ES6 style
- Standard -> ESLint

1) [SD](https://github.com/GroceriStar/sd) - делают интерны. Там много действий и их работу нужно курировать. Это занимает много времени, и я нехочу этим заниматься.
2) Есть множество репозиториев, которые нужно довести до ума, до такого состояния, чтобы они работали удовлетворительно.
Чтобы мы о них могли не думать 1-2 месяца.
3) [PDF Export](https://github.com/GroceriStar/pdf-export-component). Когда он заработате так, как нужно -- можно подтянуть проекты showcase, recipe-antd, select-form
3.1) Layout, сделанный Vaidm работает не до конца. Eugene со знаниями flexbox может справится с этим.
3.2) можно выложить статью по @react-pdf. Не хочу иметь разницу между GL & RecipeLayout. Может дальше мы еще добавим другие версии. Так что должны быть готовы к этому. Например календарь, или WeeklyMenu. Или еще инфу типо Лист с диетой. Что было похоже, но другое по контенту.
Модульная система позволяет с небольшими знаниями интернов в проекте улучшать код быстро и просто.
Сделали изменения в PDFExport -> сделали patch + npm publish => update [react-print-pdf](https://github.com/GroceriStar/react-print-pdf), launch with a new version and check if it works and don't crash.

Т.к. этот проект сверх простой -- это sandbox. Потом код, который работает и отлажен -- это легко потом можно перенести в более сложные проекты, в которых будет работать с меньшим количеством багов потом.


( ? ) В каждом из репозиториев у нас конечно есть и всякие мелкие задачи, но они у нас без приоритета. Я просто поставлю в них help wanted. Может это привлечет других contributors из GitHub. может написать опять джунам из GitHub? Assist может сделать базу и мы или пишем им в простом стиле. или вытащил их emails и отправим запрос на подключение к нам.

## Microservices https://github.com/GroceriStar/food-tech-static-data-microservices
Очень перспективное направление для нас. Выводит [fake-api](https://github.com/GroceriStar/fake-api)/generator/graphql/ на новый уровень, пока что это research phase.

Зачем нужны Microservices? Простой пример -- сейчас в fetch module у нас находится сразу много проектов.изменениями, и они нам особо ненужны сразу. Ситуация с тем, что проект fetch сейчас плохо работает вообще -- тоже возможность для micro.

Micro, в котором работает одна функция -- будет вполне хватать в sandboxes. Также, сейчас fetch плохо работатет в связке не rollup -- code is crashing React projects. поэтому и сложно сидеть на всех стульях.

Другой пример.
Мы начали изменения внутри [fake-api](https://github.com/GroceriStar/fake-api) и он также частично неработает. Мы пытаемся заменить подключение даных из fetch, на простые файлы из sd. Если бы сейчас у нас fake-api были deployed на хостинг -- эту изменения бы могли.точно поломали бы несколько React projects, которые были бы выложены на Netlify и поломадись бы.

## ReactPrintPDF https://github.com/GroceriStar/react-print-pdf
Netlify deploy, чтобы я легко мог, не скачивая проект, открыть и посмотреть результат онлайн. Это также позволяет легко показывать проект другим людям. Визуальная составляющая очень важна в нашей работе. CodeClimate помогает делать чистыми code модулей, еще конвертировать @TODOs в GitHub tasks

## Showcase https://github.com/GroceriStar/showcase
проект Groceristar, состоит из таких основных компонентов.
https://github.com/GroceriStar/antd-showcase-components
https://github.com/GroceriStar/antd-showcase-sandbox
https://github.com/GroceriStar/antd-second-components
https://github.com/GroceriStar/cards-wrapper-component

- Header/Menu
- List of Cards
- connecting with our data
- connect with basckend + good .env/config

Local/Netlify/[fake-api](https://github.com/GroceriStar/fake-api)/sd/microservices connecting Modal with View(cards component repo???)
PDFExport connection
Showcase может являться первой версией Groceristar
Еще у нас есть отдельные страницы, позволяющие просматривать только данные о grocery lists

## Recipe-antd https://github.com/ChickenKyiv/recipe-antd
Очень сильно похож на проект showcase
Фронтенд там одинаковый --
header/search
list of cards, которые позволяет просматривать данные из backend.
При нажатии на card -- мы видим modal window с информацией внутри.
Наличие тех же самых компонентов позволит одновременно делать 2 проекта. Применяем и доделывая компонент в одном репозитории -- мы сразу делаем/изменяем код для работы в 2х местах.
Recipe-antd - фронтенд для вывода данных рецепта из backend. Он также работает с fetch/sd, а потом будет слать запросы к graphql server.
Он может являться первой версией chickenKyiv? Добавив Yaml/Markdown, можно получить NO CODE version?

## MealCalendar https://github.com/GroceriStar/calendar
ReactFrontend -- to finish. Header -- antd showcase. Модуль календаря  как то работал. maybe replace/improve/change modal -- ее нужно сделать/переделать в antd style -- внутри данные выводим как и выводили.

## SearchForm https://github.com/ChickenKyiv/recipe-search-react
- нужен backend or at least working fetch plugin
- maybe micro with basic get data will work cool
- import SelectComponent
- we need to have a working db-config. В котором хорошо сделанные проверки для backend. чтобы все работало одновременно.
- предыдущая версия может быть опробованна вначале в showcase/recipe-antd. Там же не поиск как таковй, а скорее форма фильтрации.

## Micro
позволяет упростить код fetch. Решить проблему разных код проектов, разделить Travis Ci + checkers на отдельные части и не перекидывать людей мужду github repositories. Хранить таски в одном месте. Проще улучшать code и т.д. Легко просматривать изменения, выложенные online. Easy to show our done work to other people online.

## fake-api https://github.com/GroceriStar/fake-api
добавив больше тестов в роуты -- когда роут не возвращяет результат -- значит fetch method не работает.
[fake-api](https://github.com/GroceriStar/fake-api) также простой для выкладывания online. разные его роуты позволяет выводить данные из sd/fetch.

Для launch we need a frontend also, for displaying data into website. React? ! easy to finish, when our project will be configured to quickly deploy at Netlify with  Netlify deploys, has cool .env/config, etc.

Мы будем корректировать наш план, в зависимости от будущего. Например, если sd пойдет быстрее, мы передвигаем вперед компоненты, которые на прямую выводят данные.


Перенос этой инфы из Readme into Docusaurus -- increase our visibility and reduce my problems -- where to keep all this long text. it can also help us to improve releases.

## Constants https://github.com/GroceriStar/fetch-constants
тоже надо закончить с помощью интернов. Поможет с функционалом Frontend(routes) with backend. Может и microservices ускорит нашу работу.

## GraphQL Schemes https://github.com/GroceriStar/graphql-server
я хочу это сделать как промежуточный шаг, перед тем, как перейти от sd к graphql backend. Если сфокусироваться только на схемах, это позволит интернам научится создавать схемы, это впринципе сделать легко и
потом можно брать отдельные схемы, которые у нас есть, подключать их для разных проектов и использовать и улучшить одновременно.
Например -- мы сделали micro для файлов из sd. Объединили мелкие файлы в отдельные entities, которые потом легко использоваться в react-projects. Потом когда react-projects отложенны и не имеютбагов, проблем -- мы можем подключать серверы, как микро, а потом переходить и к серверу.

Внутри fetch -- projects становятся отдельными packages. sd-projects-separated packages.
projects2.0(https://github.com/GroceriStar/groceristar-fetch/tree/projects-v2) -- rollup+shit+travis -- туда вначале переношу я те же функции, что и были. при этом и тесты и методы имеют отдельные точки входа, тестов, CI and etc. Потом add stretch goals and connect to a внешние устройства и т.д. publish at npm, etc.

For static files we use js schemes for validation of our JSON files. Потом можно будет их конвертировать в простые версии схем graphql.
Потом мы переносим их в graphql backend, настроим сервер.серверы и будем работать над backend

После создание схзем мы сможем быстро перейти к gs-gql, ck-gql. еще мы сможем потом настроить связи между сущностями.
Тесты помогут разобраться, какие компоненты fetch неработают в routes.  



===
Separation of inner  projects at sd/fetch at small projects. Having similar entry points, less includes, less cross-modules sections.

Cool coding worflow for testing, error checking, management, etc.

Code has ES6 style.

Updated/limited description / short explanation of how modules/packages works.

Separated point for play.js file, where you can console.log your methods and see how they react to you ;)

Add methods, add comments to each method

Add @TODO as place, where people can extend code as homework.

Create a place for Glitch as online editor/entity to run your code. - JS Fiddle, CodePen, etc.


Separated and more clear understanding of tests.

Moving partially help us to conquer a Big Problems, Code Debt, that we faced with.

Simple code helps to make quick process, releases, without static brain -> because everything all of our work is simple and clear.

Index.js as starting point for exporting.

All of our methods to the outside of our modules.


ESLint keeping code clean. Husky keeping our code better
Code Climate search for duplicates, todos, complex logic, etc.


===========


вынос генератора out
вынос парсера out
как разбить sd файлы на более мелкое количество частей?

вначале можно вынести проекты в отдельные модули в micro repo?
как можно вернуть fetch в процесс разработки?
то же микро позволит его облегчить и позволяет перейти на es6
sd
- Fetch
  -- fake-api
    --- react projects/ react components
  -- graphql
    --- react projects
  -- showcase GL
  -- showcase recipe

JSON validator -- separated entity as well???

SD -> projects -> separated, generated, validated files with tests, CI ???

можно сделать статью, как мы готовим backend is JSON datasets

convert to JSON using csv parser
validate json
create a new structures, if needed
npm publish
using generator, for creating a new structures, that can be used in code development

файлы, генерируемые generator -> в fetch micro, чтобы все отдельно лежало с тестами вместе отдельными

схемы сложных структур там тоже валидируются

это уже можно подключать в React componetns, которые работают на вывод

Потом идет генерация graphql schema потом соединение json c graphql для bzckend
потом создание resolvers и мутации, которые уже будут изменять данные

sd -> graphql micro that return complex files. fetch -> graphql methods that grab that JSON files and return via get methods

SD - graphql micro with that methods, that change our structure at stages

maybe then we can use our graphql-server repository

JSON Validator install to all sd/projects -- Done???

tests SD -- to GraphQL
data
src -> index.js utils.js
travis
tests
json validator

CI sd latest install
CI sd projects/ generator
fetch projects creation build
graphql start --> connect with frontend

чтобы работали react прроекты - - нужно иметь отдельные проекты в sd, потом отдельные модули уже использоваться

сделать автоматические actions(husky)???
которые бы подтягивали наши последние релизы из fetch/sd и сразу все ломалось бы в PRs

recipe-antd
 - sd/projects/recipes
   -- fetch/projects/recipes

 - graphql/recipes connect with React

 GL Showcase
  - sd/projects/gs
    -- fetch/projects/gs
  - graphql/gs

fake-api
 - sd/projects/gs
   - fetch/projects/gs
 - sd/projects/recipes   
   - fetch/projects/recipes

 - meal calendar?
 - USFA?
 - FoodComposition

 попробывать использовать showcase для 5-10 подпоректов
 GL/ recipes/ MealCalendar/ Units/ Measurements, Nutritions
 потом уже для более сложных проектов и структур

 Search
  - sd/rpojects/Search
    - fetch/projects/searcg

selectFields
 - sd/projects/attirbutes
   -- fetch/rpoejcts select

PDF
 - sd/projects/recipes
    = fetch/projects recipes
  - sd/projects/GL
     = fetch/projects GL

     можно и display set of recipes
     Meal Calendars
     weekly menu
     different random recipes inside of weekly menu

GraphQL
 - sd/projects/gs
  == fetch/projects/gs



  generator/projects/attributes / health labels
  generator/ measureemnts
  generator/nutritions --> same data with different structures

  MealCalendar React
   -- sd/rpojects/MC
      --- fetch/projects/MC

  -- graphql/ MC

  Search for GL, search for Recipes, for ingredients


  generator поможет создавать правильные данные из separated GL в сложные объекты      


---
---


#### csv parser
csv files может быть даже обкатать еще несколько datasets, которые есть Плюсы -- рассказываю как парсить данные, как их можно собирать, переделывать.

Он должен быть отдельным модулем, со своей инфраструктурой.

Можно и статью из картинок для курса.
И readme separated to create
Goal - simplify script, split it into 10-20 functions, that will be simple and easy to understand

## generator
using parser as module. или тоже независимая сущность, который создает сложные и не сложные структуры.
его методы должны вызываться извне. поэтому что иначе все очень сильно ухудшает его структуру.

Создание унифицированного вида для projects

USFA -- данные есть, их соединять в один dataset? get's для возврата данных.
+ validator JSON
- separated module, в котором уже есть error reports, также как и функции для jest tests.

т.о. есть schema, есть examples (random?) и при этом осн. логике всех файлов тестов сильно упрощается.

--
Одинаковые методы, изменяющие струкруту -- можно вынести из projects at generator
--
увеличив количество duplicates at projects я пойму какие из методов потом тоже вынести в извне.
мы сделаем our boilerplate, когда там есть и generator & csv parser & tests folder + files and major structure.

#### static files boilerplate
index.js
files.js
+sd-wrapper
/tests
/raw
/data
play.js

scripts for lint/husky, etc.

а потом будем его клонировать, может быть и отдельный курс для этого.

Цель для всех projects: понятная и простая структура.
Добивание этих проектов до ума. Завершение основных работ над мелкими проектами. решение вопросов внутри fetch and etc...

Videos folder + readme в ней краткий текст для записи видео.

+ отдельно список для slides + TOC
Нажал на title --> перешел в slide
потом это перейдет в docusaurus without a problems

Развить несколько статей на слайды, чтобы потом один сет слайдов -- одному видео.
делать тайтлы для слайдов, видое, картинки позволит потом быстрее заливать туториал.

---

упростить текст внутри слайдов, чтобы их было проще читать / рассказывать на видео.

отформатировать тексты так, чтобы было более визуальнее .

---

Секция с практическими заданием.
5 простых homework, чтобы улучшить знания.

Курсы помогут улучшить документацию, улучшает код + article can be published.
---
Настроить CI, чтобы on build small modules publish them automatically / install and try inside at other projects.

CI publish npm automatically with merge of PRs
----

SD разбивается на 10 modules
Validator
csv parser
projects
boilerplate
код простой и логичный - learna are we ready?

---

Recipes separately
Nutritions separately
Unit convertions separately
GL separately

все модули работают ok with nodejs + express + React

Кажыдй курс помогает сфокусироваться на отдельны мелких проектах, чтобы недумать потом о них.

## SD
доводим до ума структуру файлов. Улучшаем документацию, чтобы выложить sd-plain
## fetch
разбивание его на части, нормальная работа с sd. ES6 конвертация
## fake-api
- позволяет ему быть рабочей лошадкой в процессе работы с нашим разными structures и вывод данных в React Projects
## generator
вывод в отдельных проект. улучшение его кода, чтобы он легко работал для многих наших cases

## csv parser
отдельный модуль, чистый, понятный код, функции описанны в readme documentation

везде images, везде stretch goals, везде описание как использовать module

еще внутри проектов можно применять design patterns, чтобы мне было интереснее.
так я улучшаю свойства проектов, вывожу их логику на новый level.

convert generator task main to article at HN

---

Microservices as extension of our modular approach

generator try to create GL with a different structure from what we have right now, using our generator script

or try to combine measurements files together as one entity

or meal calendar updates similar how we create weekly menu or free menu files


microservices
- recipe -- next -- next - aka random thing from file data
- food composition by country
-- failory - 10 articles about meals/ food projects 
