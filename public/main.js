const tarotCards = [
    { name: "魔術師", image: "taro/magician.jpg", upright: "代表內在有明確的想法和目標，不用等待他人支援或準備，就可以積極展開行動。", reversed: "逆位魔術師所施展的魔法是一種欺騙和詭計，背後代表有可能只想獲得利益的自私心態。" },
    { name: "女祭司", image: "taro/high-priestess.jpg", upright: "代表擁有智慧、理性以及高潔的精神，不會過度偏袒任何一方或是投機取巧。", reversed: "代表潔癖或是完美主義的一面會特別顯眼，為了排除自己無法接受的部分，甚至可能還會以扭曲的角度面對現實。" },
    { name: "皇后", image: "taro/empress.jpg", upright: "代表因為過去累積的努力，無論是精神還是物質上都能獲得滿足。", reversed: "代表過度的愛與過剩的物資，沉浸在享樂主義之中，慢慢失去對世界萬物感恩的心。" },
    { name: "皇帝", image: "taro/emperor.jpg", upright: "代表有執行力、說話也有建設性的形象，可以有效領導組織，也能確實盡到自身的責任而獲得他人讚賞。", reversed: "代表可能有倔強固執或是專斷獨行的態度，以不合理的方式對待他人。" },
    { name: "教皇", image: "taro/hierophant.jpg", upright: "代表因過去確實遵守規範，而和他人建立起的信任關係，或者是遇見了精神上的榜樣，可以在人生旅途上帶領你成長。", reversed: "代表有違反倫理道德的跡象，甚至可能有以偽善的行為做出背叛他人的負面形象。" },
    { name: "戀人", image: "taro/lovers.jpg", upright: "代表對某件事物深深吸引，所以彷彿置身在天堂般的享受，所以鼓勵你去勇敢追求想要的事物。", reversed: "過度沉溺在眼前的快樂，甚至呈現出現在穩定就好的消極態度，可能會讓人有不負責任、很隨興的感覺。" },
    { name: "戰車", image: "taro/chariot.jpg", upright: "代表無論前方有任何阻礙都不會被打敗，並且能夠勇往直前朝向目標順利邁進。", reversed: "代表戰車的能量開始失去控制，可能會朝不好的方向前進，也暗示需暫時停下來好好釐清前進的方向。" },
	{ name: "正義", image: "taro/justice.jpg", upright: "代表面對的事物會受到合理公正的對待，並且過去的所作所為，也可能將會受到公平的審視。", reversed: "代表過去的行為，可能受到情感或個人利益考量而有偏頗，也可以解釋成自己正受到不合理對待的狀態。" },
	{ name: "隱士", image: "taro/hermit.jpg", upright: "代表可以靜下心，重新審視內心的模樣，甚至追求理想的穩重態度，可能會因而得到眾人的尊敬，藉此擔任領導的職務。", reversed: "代表過於拘泥追求理想，可能會無法接受眼前的狀況而逃避現實" },
	{ name: "命運之輪", image: "taro/fortune-wheel.jpg", upright: "代表正處於幸運的狀態之中，可能也會有意料之外的機會到訪，但好運往往不會等人，所以若察覺到機會就要採取行動加以掌握。", reversed: "代表命運的齒論正逆時針旋轉，呈現出不順遂的狀況。可能會出現徒勞無功或是浪費難得的機會。" },
    { name: "力量", image: "taro/strength.jpg", upright: "代表抱持著真心誠意待人，就能與對方培養信任關係，甚至可能會互相協助一起跨越難關。", reversed: "代表有毅力不足而無法堅持到最後，或者是過於諂媚或試圖利用對方的行為，讓人產生出負面的形象。" },
    { name: "倒吊人", image: "taro/hanged-man.jpg", upright: "代表承認現實上的不如意，可以冷靜下來好好思考來龍去脈，或許就能藉此獲得新靈感，將逆境化為轉機。", reversed: "代表無法接受現況而苦苦掙扎，但在這樣的情況下，更需要的是正視問題所在並採取行動做出改變。" },
    { name: "死神", image: "taro/death.jpg", upright: "代表邁向新階段的開始，雖然可能會感到不適應，但擁抱改變也意味著有全新的未來在等著你。", reversed: "代表目前依然受到過去的人事物而執著，沒辦法輕易改變現況所以無法前進下一個人生階段。" },
    { name: "節制", image: "taro/temperance.jpg", upright: "代表面對不同的意見和想法，可以接受並融合自身的意見，與他人加以討論，從中找出最適合的處理方式。", reversed: "代表無法接受新的意見或想法，可能會經常發生錯身而過，或者是與他人交寄上的衝突等情況。" },
    { name: "惡魔", image: "taro/devil.jpg", upright: "代表無法抗拒各種誘惑，所以任由惡魔佔據內心，慾望也隨之永無止盡地要求更多。", reversed: "代表正在和內心的惡魔交戰中，試圖改掉壞毛病，但試圖改正長期以來的習慣並不是一件容易的事，所以需時常檢視自己是否又重蹈覆轍。" },
    { name: "高塔", image: "taro/tower.jpg", upright: "代表突如其來的衝擊雖然會讓人茫然自失，但是勇於面對並適時做出調整，或許藉此能夠帶來更多的收穫和啟發。", reversed: "代表突如其來的意外剛開始可能沒那麼衝擊，但之後會慢慢發酵，讓你不得不改變現況，並且從中反思到底是什麼原因，讓你執著到緊抓著舊事物不放。" },
    { name: "星星", image: "taro/stars.jpg", upright: "代表目前正在朝向理想的目標前進，持續保持下去就會迎向光明的未來。", reversed: "牌被反過來，所以含有希望寓意的星星看起來就像正墜落到地面，代表出於某些原因，導致抱持的希望變成失望，也暗指目標好高騖遠，最終可能會達不到理想的結果。" },
    { name: "月亮", image: "taro/moon.jpg", upright: "因為月亮的光是反射太陽光而成的，所以相較之下會有朦朧不清的感覺，而在塔羅牌的世界，暗指目前可能是透過幻想看著現實，並且內心有想要隱瞞的事物而不安。", reversed: "代表逐漸看得清楚現實狀況，開始察覺到許多事物的真實面貌。" },
    { name: "太陽", image: "taro/sun.jpg", upright: "代表持續依循想去做的熱忱和勇往直前的行動力，就能從中獲得喜悅，並且自然而然獲得回報。", reversed: "從逆位牌來看就像是太陽正在西沉，代表無法充分發揮自身的力量，所以最終結果難以符合心中理想的模樣。" },
    { name: "審判", image: "taro/judgement.jpg", upright: "代表能確實把握機會，讓過去的事物重新成為下一階段的人生轉捩點。", reversed: "代表因為曾在關鍵時刻無法鼓起勇氣，所以機會沒有被及時掌握而溜走，可能導致重拾的計劃或人際關係再度被封印。" },
    { name: "世界", image: "taro/world.jpg", upright: "代表過去腳踏實地完成事情，所以完成時會產生一種貫徹到底的滿足感；或者是你對原有的人事物有了不同的認知，目前已經來到全新的人生境界。", reversed: "雖然已經有一定的完成度，但最終結果卻不如預期。" },
    { name: "愚者", image: "taro/fool.jpg", upright: "意味著充滿無限的可能性，或許會有出乎意料的機會或靈感降臨，所以可以不用過度在意世俗的眼光，依照自己的心意順其自然過生活。", reversed: "遲遲猶豫不決的行為會在近期特別明顯，但這樣的態度反而會讓人有不負責任的感覺，間接失去身旁人們的信任，所以學習如何拿捏自由與社會化之間的平衡，就會是很重要的課題。" }
];

const cardContainer = document.querySelector('.card-container');
const card = document.querySelector('.card');
const cardFrontImage = document.querySelector('.card-front .card-image');
const cardBackImage = document.querySelector('.card-back .card-image');
const cardNameElement = document.querySelector('.card-name');
const cardUprightElement = document.querySelector('.card-upright');
const cardReversedElement = document.querySelector('.card-reversed');
const drawButton = document.getElementById('draw-button');

let drawnCard = null;

function uploadCardDraw(card) {
    const user = firebase.auth().currentUser; // Access the current user
    if (user) {
        const now = new Date();
        const timestamp = firebase.firestore.FieldValue.serverTimestamp(); // Use server timestamp

        const cardData = {
            cardName: card.name, // Use cardName for consistency
            orientation: card.orientation, // "upright" or "reversed"
            timestamp: timestamp, // Using timestamp field name
        };

        // Save to cardDraws/{user_uid}/draws subcollection
        db.collection("cardDraws").doc(user.uid).collection("draws").add(cardData)
            .then(() => {
                console.log("✅ 抽卡資料已成功上傳！");
            })
            .catch((error) => {
                console.error("❌ 上傳錯誤：", error);
            });
    }
}
function main() {
    drawCard();
}

function drawCard() {
    // Reset the card and meaning
    cardContainer.classList.remove('flipped');
    card.classList.remove('reversed'); // Remove reversed class
    cardBackImage.parentElement.classList.remove('reversed');
    cardFrontImage.src = 'taro/back.jpg';
    cardBackImage.src = ''; // Clear previous back image
    cardBackImage.style.transform = 'rotate(0deg)'; // Reset rotation
    cardNameElement.textContent = '';
    // Clear both meanings initially
    cardUprightElement.textContent = '';
    cardReversedElement.textContent = '';
    drawnCard = null;

    // Draw a random card
    const randomIndex = Math.floor(Math.random() * tarotCards.length);
    drawnCard = tarotCards[randomIndex];

    // Randomly determine orientation (0 for upright, 1 for reversed)
    const orientation = Math.floor(Math.random() * 2);
    drawnCard.orientation = (orientation === 0) ? 'upright' : 'reversed';

    // Add a small delay before setting the back image
    setTimeout(() => {
        cardBackImage.src = drawnCard.image;
        if (drawnCard.orientation === 'reversed') {
            cardBackImage.parentElement.classList.add('reversed'); // Add reversed class to parent
        }
    }, 50); // 50ms delay
}

function flipCard() {
    if (drawnCard) {
        cardFrontImage.src = drawnCard.image;
        setTimeout(() => {
            cardNameElement.textContent = `${drawnCard.name} (${drawnCard.orientation === 'upright' ? '正位' : '逆位'})`;

            if (drawnCard.orientation === 'upright') {
                cardUprightElement.textContent = "正位解析：" + drawnCard.upright;
                cardReversedElement.textContent = '';
            } else {
                cardUprightElement.textContent = '';
                cardReversedElement.textContent = "逆位解析：" + drawnCard.reversed;
                card.classList.add('reversed'); // Add reversed class to card itself
            }

            // ✅ 在翻開卡片後上傳至 Firestore
            uploadCardDraw(drawnCard);
        }, 600); // Animation time
        cardContainer.classList.add('flipped'); // Add flipped class
    }
}
drawButton.addEventListener('click', drawCard);
card.addEventListener('click', flipCard);

main();
