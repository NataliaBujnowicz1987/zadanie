# ZADANIE REKRUTACYJNE Mini bukmacher - Natalia Bujnowicz

10:00-10:40
- zapoznanie się z zadaniem
- rozplanowanie struktury strony
- budowa struktury strony (HTML)
- dodanie styli (Sass/Css)
- resposywność (media query + testy)

10:40 - 12:00 
- pobranie danych z pliku JSON za pomocą metody fetch()
- utworzenie zmiennych z elementami, które będą się dynamicznie zmieniać na stronie
- przypisanie do elementów danych z API (na początek na sztywno, z 1 obiektu)

/////////////////////////////////////////////////////

DODATKOWY CZAS NA UKOŃCZENIE ZADANIA (dziękuje)
- utworzenie zmiennej i, która na początku pobierała losowy numer od 0 do 3:
(źle zinterpretowane zadanie) i przypisanie tej zmiennej w miejscach pobierania danych z danego obiektu;
- wyświetlenie pobranej daty w czytelniejszym formacie (skorzystanie z metod obiektu Date);
- poprawienie stylów CSS;
- utworzenie funkcji activeBtn, która zmienia styl klikniętego buttona;
- dodatnie dots'ów, które zmieniają wygląd w zależności od tego, które dane z API są aktualnie wyświetlane;
- kropki te uświadomiły mi, że tu nie chodziło o losowość, ale wyświetlanie danych jeden po drugim. Nowym celem było utworzenie funkcji, która co 3 sekundy zmieni dane przypisane do zmiennej i (od 0 do 2). Z tym zeszło mi najwięcej czasu, rozwiązanie jakie zaproponowałam nie jest idealne. Aplikacja działa poprawnie, ale przy odświeżeniu strony trzeba poczekać 3sekundy, aż dane zostaną wyświetlone;
- zliczanie kursu całkowitego dla wybranych wydarzeń: wykonane dla grupy gości. Problematyczne okazało się wyświetlenie tych danych na elemencie, który ma dodaną klasę active. Idealnie byłoby mieć dostęp do danych w funkcji activeBtn, ale tutaj chyba musiałabym coś kombinować z domknięciami. Próbowałam też przypisać zdarzenie onclick na poszczególne buttony, aby w ten sposób zmienić ich content. Niestety, przez to, że cała metoda fetch jest owinieta setInterval() zmiany te nie zachodzą odrazu. Tutaj musiałabym wrócić do zadania wcześniejszego i wymyślić inny sposób na zmianę wartości zmiennej i co 3 sekuncy;
- uporządkowanie kodu, utworzenie notatek;
- dodanie repozytorium na Github
#   z a d a n i e  
 