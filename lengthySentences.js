function findLengthySentences() {
    var text = $("#textInput").val() + " ";
    let sentences = text.match(/[^.!?]+[.!?]/g) || [];

    let sentenceWordCounts = sentences.map(sentence => ({
        text: sentence.trim(),
        count: sentence.split(/\s+/).length
    }));

    sentenceWordCounts.sort((a, b) => b.count - a.count);

    let summary = sentenceWordCounts.slice(0, 10).map(s => `${s.count}: ${s.text}`).join("<br/>");
    let averageLength = sentenceWordCounts.reduce((sum, s) => sum + s.count, 0) / sentenceWordCounts.length;
    let counts = [50, 40, 30].map(limit => sentenceWordCounts.filter(s => s.count > limit).length);

    let result = `Average sentence length: ${averageLength.toFixed(2)}<br/>` +
                 `${counts[0]} sentences with more than 50 words<br/>` +
                 `${counts[1]} sentences with more than 40 words<br/>` +
                 `${counts[2]} sentences with more than 30 words<br/>` +
                 `<ul><li>${summary}</li></ul>`;

    $("#longestSentences").html(result);
}
