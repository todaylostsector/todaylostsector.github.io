/************ Start paser *******************/

const itemImg = ["<img src='https://www.bungie.net/common/destiny2_content/icons/eb5b56927321624ee0c065d6d31353ee.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/753a1bf4731cb0966582dfe30f1bbb81.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/84591e3c4a4682bf44d1f7155d05eac5.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/8afe2556d2e7176ca8304b0f63876835.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/82ee2e1996cb9439f012c29a5a4cf428.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/14a135a3b1a373f7e108c772129817ac.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/c5a78fb99116b92938e606efd17d026a.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/56067d6c25d683d1abc860735f969b2a.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/d3e99c207f93f61fe1bdef0b76e87005.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/5c59a807ea865f6e7f4872c8427ffeec.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/2560892ef08fad22fd6fd24fbe574d6f.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/5745715e1185660ed3f50d44e560ad43.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/9e314283e4c8ff452b19ae4e744ca8a4.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/1f5fdebd3baa097ec9ac0f317e6bcf5a.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/4b11623d33028c7defb12e55ef46334c.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/3cf26bd2b33c91dbf37af086dd8c449a.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/934442a5b6cc21005d098e44c9194563.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/90fef217867055eba176f774ae3f76c6.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/4ecb05a78fed86ce4362dfee2016a313.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/bdc12693ebb44d80009976beaafda35f.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/57f32f0a593476b81715cb0f5617147b.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/843893968fcc11bfe27b1d40bb04ea01.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/3a1c7fc533d3cbee2711e3a1834bb471.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/b69e68fa9aacc44e8d26fb02ad5627e1.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/14a135a3b1a373f7e108c772129817ac.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/c5a78fb99116b92938e606efd17d026a.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/56067d6c25d683d1abc860735f969b2a.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/e9ae339657477b15a7208768599aa20e.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/ce498709760ca1a566f8ef8dc7cf62dd.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/76a827bb702b9411443145340e8d6608.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/e072476c9a45bfa1c5bd08671615a2a8.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/1dee884d57f61007d43a7a05f6ee3432.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/2316329f1d351ae47d0c5a2ea6318503.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/3b04d9dc2cfb31767ac2ee857021ffd3.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/7b6e12d58a323be4de71511f3be66635.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/8d00e9d51bf4da5620ca58b647152c2e.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/e8c52e78b005f454fd0001d871c5d3c6.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/b279a07c6024eb1658dd224461b4c745.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/75be97644be1e74ce5ffdc19bf0a28ac.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/f03b91b6c531da872013e7ee57d86029.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/0cc8231d4ee2fc4f63a82ffff9e62a8b.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/caf7c86096018232f757094b932f0126.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/93fead643c5f847a3fe9a1c7812700f3.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/395ae0e0bf3625ed593da301bc7a3239.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/f5af9fc8badf7ccff1f795c4c7c96e03.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/d4075f0a665856c2ee5f7d3468d1a682.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/14a135a3b1a373f7e108c772129817ac.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/c5a78fb99116b92938e606efd17d026a.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/56067d6c25d683d1abc860735f969b2a.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/7eda8b5d84c3726d3db50c6a77a0f957.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/cb95bbd934ad538058b5eb18bed26fcf.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/860e6f9c0be15819d928823b2267a254.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/3d87fd61a76af6eb67909f9ed516f019.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/48f6aee718383ae5de9b8406a6800ece.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/5532b53032a00ca01ad342ac8a484d14.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/95fed231602f7115a02b7286ee5b315a.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/e8c52e78b005f454fd0001d871c5d3c6.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/091d3cc5efb57147cd0dbe12238ce7ba.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/93266bc0c30210bf774e47e8fda7e7b1.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/420fcdcab4f29c25f8b1d8470e8f6944.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/f69c03b395a82a7f64134ff3e3284e08.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/16adf0c528574e49eddb3e7b3b314665.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/572e7adc68f3641c8f0d2b6102d041fb.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/9d66c0a132a641f0e3747d7fa4f418fe.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/9f576e0159088706e380163a7e0d5ea1.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/763634b78eb22168ac707500588b7333.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/220dd5ba0dcf33dc0dbe081106c59960.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/ea50c1e0e4c9d4d6d57ed28c797f367f.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/14a135a3b1a373f7e108c772129817ac.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/c5a78fb99116b92938e606efd17d026a.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/56067d6c25d683d1abc860735f969b2a.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/b3ffc2cf0abc5382df3f6f6c956dfc92.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/bdc12693ebb44d80009976beaafda35f.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/f5af9fc8badf7ccff1f795c4c7c96e03.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/5c446db630af09a7f159403f6fb470a8.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/28dfed1a2ab266035bb3c8934354fe74.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/3a1c7fc533d3cbee2711e3a1834bb471.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/843893968fcc11bfe27b1d40bb04ea01.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/61624e3f2cda21f2e6a03f8c0c184ca0.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/b69e68fa9aacc44e8d26fb02ad5627e1.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/0a2a095938a5ad70b5e1109e734ea969.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/1f114e19e4fc766c1e36ab333bb0f5c0.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/eeb1cf7cdd4ac60633a1c83fae8cd01d.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/d51846f2b911e82227ba41981e4b3467.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/03a94642abbfc3b1ef02a265ccffafd5.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/d90d514ead3d687694705d2a2af7444f.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/f1daa9049dcb540cfcceef5048f4418e.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/19e760c129829b30bb4a2295f4af99ca.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/ce5476abf13de7d59e9cdd14471dc7c6.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/42a5c5199113feed00a3264ccceceb97.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/14a135a3b1a373f7e108c772129817ac.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/c5a78fb99116b92938e606efd17d026a.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/56067d6c25d683d1abc860735f969b2a.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/caf7c86096018232f757094b932f0126.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/93fead643c5f847a3fe9a1c7812700f3.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/ea50c1e0e4c9d4d6d57ed28c797f367f.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/45a07fc9532dc7c5f580ec69e9cac78e.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/5081322672fed7d147fba727f0f29864.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/57f32f0a593476b81715cb0f5617147b.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/c1311b56ff0b9f8083c4f54553b1486c.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/2b0ae49caeac35de887523ac653906e6.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/a4c8d4c14ea1792e809e524caf6ebe8d.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/9f576e0159088706e380163a7e0d5ea1.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/eb4aa6ab10dc005de71908edcb2d5788.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/e75ac6c8506ddf1e30c97a865de43640.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/0a67fd4673d2a0db1860edd2538d784c.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/763634b78eb22168ac707500588b7333.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/dd0f276e572cb1509c486cb5b1c62c8d.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/e4495ac9074d9cca7d52355f4a74dfb7.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/14a135a3b1a373f7e108c772129817ac.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/c5a78fb99116b92938e606efd17d026a.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/56067d6c25d683d1abc860735f969b2a.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/f1daa9049dcb540cfcceef5048f4418e.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/d5b517623978b4102bc701bb9ad1e9d2.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/42a5c5199113feed00a3264ccceceb97.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/0500f9a628a80365c9d0390195064584.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/ce5476abf13de7d59e9cdd14471dc7c6.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/d90d514ead3d687694705d2a2af7444f.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/19e760c129829b30bb4a2295f4af99ca.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/763634b78eb22168ac707500588b7333.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/220dd5ba0dcf33dc0dbe081106c59960.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/23a58a331b059219557561759857c008.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/142ba7f6e983934e983445c726d0b5fc.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/adf58b5c50a1655abd58193fc7f9a31c.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/b5bbfc3fef0326b216e1360d12b82143.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/44433c3116931cf06d0a7af473ca9e76.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/eeb1cf7cdd4ac60633a1c83fae8cd01d.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/d51846f2b911e82227ba41981e4b3467.jpg' style='width: 40px; height: 40px;'/>",
 "<img src='https://www.bungie.net/common/destiny2_content/icons/03a94642abbfc3b1ef02a265ccffafd5.jpg' style='width: 40px; height: 40px;'/>"];
 /************ End Img paser *******************/
 
  /************ Start Item paser *******************/
const itemPy = [
'극지 사슴',
'환희 폭격기',
'호 호 험',
'불씨심지 의체',
'눈송이 투영',
'응축 물질석',
'미광체조각',
'수집가의 혜택',
'차가운 친구',
'작은 도우미 의체',
'은빛날개 황조롱이',
'튼튼한 월계관',
'악천후',
'주먹 인사',
'뒤엉킨 의체',
'결정체 의체',
'선물 제공자',
'기본 지시',
'거대 비둘기 투영',
'차 쏟기',
'아틀라스 화물선',
'운 좋은 느낌',
'평온한 의체',
'걱정 없어',
'응축 물질석',
'미광체조각',
'수집가의 혜택',
'이자나기의 의체',
'레테의 자비',
'시공 입장',
'구릿빛 녹청',
'뜻밖의 춤',
'열 주먹 검',
'앰퓰런스 LXXX',
'치명적 시스템',
'크로스 스텝 셔플',
'전설 장비',
'하퍼의 의체',
'금지된 얼굴 가면',
'금지된 얼굴 투구',
'금지된 얼굴 덮개',
'승리의 춤',
'아틀라스 주자',
'우두머리의 위엄',
'아틀라스 의체',
'제발 안녕',
'응축 물질석',
'미광체조각',
'수집가의 혜택',
'상처뿐인 승리',
'별악마 의체',
'벡스 침입 효과',
'버터껍질',
'아틀란티스 의체',
'기계화',
'망루',
'전설 장비',
'강한 팔꿈치 춤',
'브레이테크 DREAM9',
'멀리 바라보기',
'금지된 얼굴 발걸음',
'금지된 얼굴 각반',
'금지된 얼굴 장화',
'워낭',
'옛 방식',
'경이 장비',
'점수 기록',
'거미 투영',
'응축 물질석',
'미광체조각',
'수집가의 혜택',
'잠입 공격',
'차 쏟기',
'아틀라스 의체',
'호수 크루즈',
'그림자 침입',
'평온한 의체',
'운 좋은 느낌',
'명상하는 시간',
'걱정 없어',
'은혜를 아는 두루미',
'전쟁학',
'R3-디딤판',
'벨레누스 증폭기',
'지맥질주자',
'평온한 얼굴',
'천상의 창',
'잿빛 날개 위에서',
'불굴의 춤',
'단편 투영',
'응축 물질석',
'미광체조각',
'수집가의 혜택',
'승리의 춤',
'아틀라스 주자',
'거미 투영',
'자수정 꽃',
'뒤죽박죽 의체',
'아틀라스 화물선',
'선형 융합 춤',
'세이셸의 미친 아들',
'다시 만들어진 형체',
'옛 방식',
'화끈',
'고양이의 공상',
'연성계',
'경이 장비',
'날렵한 춤',
'에라미스 투영',
'응축 물질석',
'미광체조각',
'수집가의 혜택',
'천상의 창',
'커튼콜',
'단편 투영',
'탄소 피',
'불굴의 춤',
'평온한 얼굴',
'잿빛 날개 위에서',
'경이 장비',
'점수 기록',
'무례한 불청객',
'선지자 의체',
'아흐레 낮/밤',
'광압 구동기',
'동축 접합',
'R3-디딤판',
'벨레누스 증폭기',
'지맥질주자'
 ];
 /************ End Item paser *******************/



/************ Python Data *******************/

var initialDate2 = new Date(2020, 1, 1, 2); // Dec 1st 2012
var now2 = Date.now();
var difference2 = now2 - initialDate2;
var millisecondsPerDay2 = 24 * 60 * 60 * 1000;
var daysSince2 = Math.floor(difference2 / millisecondsPerDay2);		
var ever_str = "";

var WEEK_OF_ITEMS_1 = 18;
var WEEK_OF_ITEMS_2 = 40;
var WEEK_OF_ITEMS_3 = 62;
var WEEK_OF_ITEMS_4 = 84;
var WEEK_OF_ITEMS_5 = 103;
var WEEK_OF_ITEMS_6 = 128;
var W_EXO_VALUE = 0;
var W_NF_VALUE = 0;

 if(daysSince2 <= '339'){ //  1월 1주차
	for (var i = WEEK_OF_ITEMS_1; i >= 0; i--) {
		ever_str = "<div class='card-main'>"+itemImg[i]+" "+ itemPy[i] +"</div><hr/>"+ever_str;
		
	}
	W_EXO_VALUE = 2;
	W_NF_VALUE = 5;
}
else if(daysSince2 > '339' && daysSince2 <= '346'){ //  1월 2주차
	for (var i = WEEK_OF_ITEMS_2; i > WEEK_OF_ITEMS_1; i--) {
		ever_str = "<div class='card-main'>"+itemImg[i]+" "+ itemPy[i] +"</div><hr/>"+ever_str;
	}
	W_EXO_VALUE = 0;
	W_NF_VALUE = 0;
}
else if(daysSince2 > '346' && daysSince2 <= '353'){ //  1월 3주차
	for (var i = WEEK_OF_ITEMS_3; i > WEEK_OF_ITEMS_2; i--) {
		ever_str = "<div class='card-main'>"+itemImg[i]+" "+ itemPy[i] +"</div><hr/>"+ever_str;
	}
	W_EXO_VALUE = 1;
	W_NF_VALUE = 1;
}
else if(daysSince2 > '353' && daysSince2 <= '360'){ //  1월 4주차
	for (var i = WEEK_OF_ITEMS_4; i > WEEK_OF_ITEMS_3; i--) {
		ever_str = "<div class='card-main'>"+itemImg[i]+" "+ itemPy[i] +"</div><hr/>"+ever_str;
	}
	W_EXO_VALUE = 2;
	W_NF_VALUE = 2;
}
else if(daysSince2 > '360' && daysSince2 <= '367'){ //  1월 5주차
	for (var i = WEEK_OF_ITEMS_5; i > WEEK_OF_ITEMS_4; i--) {
		ever_str = "<div class='card-main'>"+itemImg[i]+" "+ itemPy[i] +"</div><hr/>"+ever_str;
	}
	W_EXO_VALUE = 0;
	W_NF_VALUE = 3;
}

else if(daysSince2 > '367' && daysSince2 <= '374'){ //  2월 데이터 끝
	for (var i = WEEK_OF_ITEMS_6; i > WEEK_OF_ITEMS_5; i--) {
		ever_str = "<div class='card-main'>"+itemImg[i]+" "+ itemPy[i] +"</div><hr/>"+ever_str;
	}
	W_EXO_VALUE = 1;
	W_NF_VALUE = 4;
}
