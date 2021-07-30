let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/Documentos/Practicas/crehana-reto
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +74 components/Header.tsx
badd +8 tailwind.config.js
badd +33 components/DarkSwitch.tsx
badd +5 store/index.ts
badd +8 store/reducers/index.ts
badd +5 store/types/AppStore.ts
badd +7 ~/Documentos/Practicas/vanila-spa/src/controllers/posts.controller.js
badd +4 ~/Documentos/Practicas/vanila-spa/src/views/home.html
badd +1 ~/Documentos/Practicas/vanila-spa/src/views/posts.html
badd +19 ~/Documentos/Practicas/vanila-spa/src/index.html
badd +5 ~/Documentos/Practicas/vanila-spa/src/main.js
badd +9 ~/Documentos/Practicas/vanila-spa/src/router/index.routes.js
badd +10 ~/Documentos/Practicas/vanila-spa/src/controllers/index.controller.js
badd +17 ~/Documentos/Practicas/redux-saga/src/store/configureStore.js
badd +9 store/reducers/countries.reducer.ts
badd +27 store/reducers/config.reducer.ts
badd +4 store/types/countries.type.ts
badd +5 store/types/config.type.ts
badd +10 interfaces/country.interfaces.ts
badd +5 interfaces/config.interfaces.ts
badd +5 interfaces/index.ts
badd +13 store/actions/countries.actions.ts
badd +6 store/actions/config.actions.ts
badd +32 store/sagas/countries.saga.ts
badd +5 store/sagas/config.saga.ts
badd +9 store/sagas/index.ts
badd +6 ~/Documentos/Practicas/redux-saga/src/sagas/testSaga.js
badd +9 ~/Documentos/GitHub/nest-next/next-admin/pages/tasks.tsx
badd +32 pages/\[\[...pid]].tsx
badd +11 components/ListCountries.tsx
badd +36 components/Detail.tsx
badd +11 pages/_app.tsx
badd +1 pages/api/users/index.ts
badd +15 pages/api/countries.ts
badd +17 config/apollo.ts
badd +29 components/Layout.tsx
badd +44 components/List.tsx
badd +1 components/ListDetail.tsx
badd +24 components/ListHeader.tsx
badd +14 components/ListContainer.tsx
badd +18 components/ListItem.tsx
badd +59 components/TryingTable.tsx
badd +2 ~/Documentos/BIEF/Creatica/fk-tech/index.html
badd +135 node_modules/next/dist/next-server/lib/utils.d.ts
badd +9 ~/Documentos/Practicas/redux-saga/src/reducers/modals.reducers.js
badd +50 ~/Documentos/Practicas/redux-saga/src/App.js
badd +11 ~/Documentos/Practicas/redux-saga/src/reducers/entries.reducers.js
badd +30 ~/Documentos/Practicas/redux-saga/src/actions/entries.actions.js
badd +22 package.json
badd +10 ~/Documentos/Practicas/vanila-spa/package.json
badd +8 ~/Documentos/Practicas/vanila-spa/webpack.config.js
badd +5 ~/Documentos/Practicas/vanila-spa/src/controllers/404.controller.js
badd +1 ~/Documentos/Practicas/redux-saga/db.json
badd +10 ~/Documentos/Practicas/redux-saga/src/sagas/entriesSagaAdd.js
badd +8 ~/Documentos/Practicas/redux-saga/src/sagas/entriesSagaDeletion.js
badd +1 ~/Documentos/Practicas/redux-saga/src/sagas/entriesSaga.js
badd +1 components/header/Desktop.tsx
badd +45 components/header/Search.tsx
badd +15 components/header/DropMobile.tsx
badd +1 ~/Documentos/GitHub/FullClean/src/components/home/modals/ModalSearchProducts.js
badd +1 ~/Documentos/GitHub/FullClean/src/components/home/bigComponents/LeftSide.js
badd +1 ~/Documentos/GitHub/FullClean/src/pages/Home.js
badd +1 ~/Documentos/GitHub/FullClean/src/components/home/bigComponents/SmallComponentsGroup/GroupButton.js
badd +1 ~/Documentos/BIEF/Creatica/fk-tech/fk-tech/casos-int.html
badd +42 ~/Documentos/BIEF/Creatica/fk-tech/fk-tech/FK-Tech/header.php
badd +1 ~/Documentos/BIEF/Creatica/fk-tech/fk-tech/FK-Tech/index.php
badd +3 ~/Documentos/BIEF/Creatica/fk-tech/fk-tech/FK-Tech/contacto.php
badd +156 ~/Documentos/BIEF/Creatica/fk-tech/fk-tech/contacto.html
badd +1 ~/Documentos/BIEF/Creatica/fk-tech/fk-tech/FK-Tech/casos-int.php
badd +1 ~/Documentos/BIEF/Creatica/fk-tech/fk-tech/FK-Tech/casos.php
badd +147 ~/Documentos/BIEF/Creatica/fk-tech/fk-tech/casos.html
badd +1 ~/Documentos/BIEF/Creatica/fk-tech/fk-tech/FK-Tech/nosotros.php
badd +165 ~/Documentos/BIEF/Creatica/fk-tech/fk-tech/trabaja-int.html
badd +165 ~/Documentos/BIEF/Creatica/fk-tech/fk-tech/nosotros.html
badd +1 ~/Documentos/BIEF/Creatica/fk-tech/fk-tech/FK-Tech/trabaja-int.php
badd +2 ~/Documentos/BIEF/Creatica/fk-tech/fk-tech/FK-Tech/trabaja.php
badd +165 ~/Documentos/BIEF/Creatica/fk-tech/fk-tech/trabaja.html
badd +1 lib/InitQuery.ts
badd +64 lib/querys.ts
badd +4 store/reducers/types/countriesReducer.type.ts
badd +26 ~/Documentos/GitHub/FullClean/src/App.js
badd +1 store/actions/continent.actions.ts
badd +104 components/Dropdown.tsx
badd +48 components/Filter.tsx
badd +1 interfaces/currency.interfaces.ts
badd +3 interfaces/continent.interfaces.ts
badd +1 interfaces/language.interfaces.ts
badd +4 store/actions/currency.actions.ts
badd +6 store/reducers/currency.reducer.ts
badd +4 store/reducers/types/currencyReducer.type.ts
badd +37 components/FilterItem.tsx
badd +4 lib/ChangeRoute.ts
argglobal
%argdel
tabnew
tabnew
tabrewind
edit store/sagas/countries.saga.ts
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 95 + 75) / 151)
exe 'vert 2resize ' . ((&columns * 55 + 75) / 151)
argglobal
balt interfaces/country.interfaces.ts
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 40 - ((34 * winheight(0) + 19) / 38)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 40
normal! 0
wincmd w
argglobal
if bufexists("store/reducers/countries.reducer.ts") | buffer store/reducers/countries.reducer.ts | else | edit store/reducers/countries.reducer.ts | endif
if &buftype ==# 'terminal'
  silent file store/reducers/countries.reducer.ts
endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 9 - ((8 * winheight(0) + 19) / 38)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 9
normal! 022|
wincmd w
exe 'vert 1resize ' . ((&columns * 95 + 75) / 151)
exe 'vert 2resize ' . ((&columns * 55 + 75) / 151)
tabnext
edit lib/ChangeRoute.ts
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 75 + 75) / 151)
exe 'vert 2resize ' . ((&columns * 75 + 75) / 151)
argglobal
balt components/FilterItem.tsx
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 11 - ((10 * winheight(0) + 19) / 38)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 11
normal! 05|
wincmd w
argglobal
if bufexists("components/FilterItem.tsx") | buffer components/FilterItem.tsx | else | edit components/FilterItem.tsx | endif
if &buftype ==# 'terminal'
  silent file components/FilterItem.tsx
endif
balt components/Filter.tsx
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 37 - ((21 * winheight(0) + 19) / 38)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 37
normal! 09|
wincmd w
exe 'vert 1resize ' . ((&columns * 75 + 75) / 151)
exe 'vert 2resize ' . ((&columns * 75 + 75) / 151)
tabnext
edit lib/InitQuery.ts
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 95 + 75) / 151)
exe 'vert 2resize ' . ((&columns * 55 + 75) / 151)
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 31 - ((17 * winheight(0) + 19) / 38)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 31
normal! 013|
wincmd w
argglobal
if bufexists("lib/querys.ts") | buffer lib/querys.ts | else | edit lib/querys.ts | endif
if &buftype ==# 'terminal'
  silent file lib/querys.ts
endif
balt config/apollo.ts
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 32 - ((12 * winheight(0) + 19) / 38)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 32
normal! 016|
wincmd w
exe 'vert 1resize ' . ((&columns * 95 + 75) / 151)
exe 'vert 2resize ' . ((&columns * 55 + 75) / 151)
tabnext 2
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0&& getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 shortmess=filnxtToOFc
let &winminheight = s:save_winminheight
let &winminwidth = s:save_winminwidth
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
