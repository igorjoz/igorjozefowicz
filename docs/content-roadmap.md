# Treści i rozwój strony

## Fakty i zasady redakcyjne

Stan researchu: 8 października 2026. Źródła: https://github.com/igorjoz, https://pl.linkedin.com/in/igor-jozefowicz/en, https://github.com/LarynxAI i obecne portfolio w repozytorium.

- Programowanie od 2018: deklaracja autora na GitHub.
- PHP/Laravel, React, ML i doświadczenie edukacyjne: GitHub oraz portfolio.
- Aktualny pracodawca, stanowisko i etap studiów: wymagają potwierdzenia; strona opisuje doświadczenie bez deklaracji aktualnego zatrudnienia ani stopnia akademickiego.
- Forcen: GitHub przypisuje realizację do pracy w Matysart; zakres RAG pochodzi z portfolio. Aktualna dostępność chatbota nie jest potwierdzona.
- Vento: funkcje, technologie i daty pochodzą z portfolio; charakter umowy i samodzielność realizacji wymagają potwierdzenia. Nie przedstawiać jako bezpośredniego zlecenia bez ustalenia faktów.
- LarynxAI: projekt zespołowy; klasyfikator opisany jako własny wkład. Brak deklaracji walidacji klinicznej.
- Nie publikować liczb o skuteczności, sprzedaży, oszczędnościach ani referencji bez materiału źródłowego. StartEuropa i Educen pozostają poza wybranymi realizacjami do zebrania materiałów.

## Publikacje

Treści stałe: `resources/content/pl.json` i `en.json`. Artykuły: `resources/content/articles/{pl,en}/*.md`. Pierwsza linia to obiekt JSON z `slug`, `title`, `status`, po nim separator `---` i Markdown. Do publicznej listy, tras i sitemap trafiają wyłącznie wpisy z `status: published` w obu wersjach językowych. Slug jest identyczny w obu językach.

- Miesiąc 1 od uruchomienia: `custom-application` — przygotowany jako opublikowany.
- `business-system-integrations` — nowy artykuł PL/EN przygotowany jako opublikowany, z jawną datą `2026-10-15`. Przed późniejszym wdrożeniem potwierdzić lub zmienić tę datę na rzeczywisty dzień udostępnienia. Artykuł wykorzystuje przykład hipotetyczny; źródła techniczne: dokumentacja Stripe Webhooks i Microsoft Retry pattern.
- Miesiąc 2: `company-ai-assistant` — szkic. Po redakcji zmienić status w obu językach razem.
- Miesiąc 3: `first-ai-pilot` — szkic. Po redakcji zmienić status w obu językach razem.

Nie ustawiamy automatycznych dat publikacji: harmonogram liczymy od rzeczywistego uruchomienia. Wszystkie teksty wymagają zwykłego przeglądu autora przed wdrożeniem produkcyjnym.

### Daty publikacji i aktualizacji

Metadane opublikowanego tekstu wymagają `publishedAt` w formacie `YYYY-MM-DD`.
Opcjonalne `updatedAt` oznacza faktyczne udostępnienie zmienionej treści i nie może
poprzedzać publikacji; aktualizacja tego samego dnia jest dozwolona i widoczna.
Autor potwierdził pierwszą publikację `custom-application` na `2026-10-08` w PL/EN.
Lokalne korekty tego artykułu nie otrzymały jeszcze daty aktualizacji. Wpisać ją
przy udostępnieniu poprawionej treści, nie przy samym zapisaniu pliku.

Daty wprowadzamy ręcznie, w obu wersjach językowych zgodnie z faktycznym
udostępnieniem. Nowy artykuł publikujemy w PL/EN równocześnie. Nie wyprowadzamy
dat z Git, czasu pliku ani buildu i nie zmieniamy ich przy zmianach oprawy strony.
Brak daty aktualizacji oznacza brak etykiety oraz brak `dateModified` w JSON-LD.
Wcześniejsza data publikacji pozostaje niezmienna po aktualizacji.

Laravel waliduje daty i przygotowuje zapis lokalny dla React i Blade. Listy
sortujemy od najnowszej daty publikacji, z rosnącym slugiem przy tej samej dacie.
Data aktualizacji nie zmienia kolejności. Listy, podstrona i dane `BlogPosting`
korzystają z tych samych wartości. Artykuły bez opublikowanego tłumaczenia nadal
nie trafiają do list, routingu ani sitemap.

## Posty LinkedIn do ręcznego wykorzystania

1. PL: Kiedy arkusz przestaje wystarczać? Zanim zamówisz dedykowaną aplikację, opisz jeden proces i sprawdź gotowe narzędzia. Przygotowałem praktyczną listę pytań: [adres strony]/pl/articles/custom-application
   EN: When does a spreadsheet stop being enough? Before commissioning a custom application, map one workflow and check existing tools. Here are practical questions to start with: [site URL]/en/articles/custom-application
2. PL: Asystent AI powinien wiedzieć, skąd pochodzi odpowiedź — i kiedy danych brakuje. W nowym artykule omawiam RAG, źródła i ocenę jakości: [adres strony]/pl/articles/company-ai-assistant
   EN: An AI assistant should reference its sources and handle missing information. Here is a practical look at RAG, sources and evaluation: [site URL]/en/articles/company-ai-assistant
3. PL: Pierwszy pilotaż AI? Jeden proces, reprezentatywne przykłady i kryteria sukcesu ustalone przed rozpoczęciem. O przygotowaniu firmy piszę tutaj: [adres strony]/pl/articles/first-ai-pilot
   EN: Your first AI pilot needs one workflow, representative examples and success criteria agreed in advance. Here is how to prepare: [site URL]/en/articles/first-ai-pilot

Posty 2–3 wykorzystać dopiero po publikacji artykułów. Nic nie jest wysyłane automatycznie.

## Utrzymanie i pomiar

Co kwartał sprawdzić role, biografię, daty, materiały projektowe i linki. Weryfikować zgodność PL/EN przy każdej zmianie.

Obecna integracja GA otrzymuje `content_view` dla oferty i realizacji oraz `contact_click` dla e-maila. Kliknięcie nie jest wysłanym zapytaniem. Osobno prowadzić rejestr faktycznych zapytań: data, źródło (jeśli znane), potrzeba, dopasowanie do oferty, dalszy etap. Po pierwszym miesiącu zebrać punkt odniesienia; oceniać jakość zapytań i dalsze rozmowy.

W produkcji ustawić `APP_URL` na docelową domenę (GitHub wskazuje igorjoz.com), `APP_DEBUG=false`, zbudować frontend i zweryfikować canonical/sitemap na rzeczywistym hostingu. HTML treści i metadane renderuje Laravel; React montuje te same dane po uruchomieniu JavaScriptu. Zmiany routingu nie dotyczą materiałów `/gp`.
