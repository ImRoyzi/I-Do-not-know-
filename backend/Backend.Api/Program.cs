var builder = WebApplication.CreateBuilder(args);

builder.WebHost.UseUrls("http://localhost:4000");

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyOrigin();
        policy.AllowAnyHeader();
        policy.AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseCors();

var funMessages = new[]
{
    "✨ Your app is officially in sparkle mode.",
    "🌈 A tiny bit of magic is already live.",
    "🚀 This starter is ready for your next big idea.",
    "🎉 The vibe is strong and the future looks bright."
};

app.MapGet("/health", () => Results.Ok(new { status = "ok", message = "Backend is running" }));
app.MapGet("/api/hello", () => Results.Ok(new { message = "Hello from the .NET backend!" }));
app.MapGet("/api/fun", () =>
{
    var message = funMessages[Random.Shared.Next(funMessages.Length)];
    return Results.Ok(new { message, emoji = "✨" });
});

app.Run();
